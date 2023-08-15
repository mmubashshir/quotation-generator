import * as React from 'react';
import useStore from "../store"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ViewPDF from './PDFCanvas';
import previewIcon from "../assets/preview-icon.png"


import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import PDFFile from './PDFFile';
const styles = StyleSheet.create({
  viewer: {
    border: "none",
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
  }
})
const style = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: "100%",
    // width: "80%",
    // borderRadius: "20px",
    transform: 'translate(-50%, -50%)',
    // bgcolor: '##2196F3',
    // border: '2px solid #000',
    // height: "70%",
    // boxShadow: 24,
    // transform: scale(0.75),
    p: 4,
    overflow: 'auto'
  },
  pdfView: {

  }
};

export default function TransitionsModal({ pdfUrl }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const store = useStore((state) => state);

  return (
    <div>
      <button onClick={handleOpen}
        type="button"
        className="drop-shadow-md disabled:opacity-50 inline-flex float-right items-center px-4 py-3 font-semibold leading-6 text-sm shadow rounded-xl text-[#1453ff] bg-slate-100 bg-opacity-20 hover:bg-opacity-25 "
      ><img className="h-4 pr-2" src={previewIcon} alt="" />Preview
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style.box}>
            <ViewPDF sx={style.pdfView} pdfURL={pdfUrl} />
            {/* <PDFViewer style={styles.viewer} showToolbar={false}>
          <PDFFile pdfData={store} type={true} />
        </PDFViewer> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}