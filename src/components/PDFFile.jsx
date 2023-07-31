import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import "../index.css";
import { TableHeader } from "./PDFComponents/TableHeader";
import { TableRow } from "./PDFComponents/TableRow";
import { HeaderSection } from "./PDFComponents/HeaderSection";
import { HeaderSection2 } from "./PDFComponents/HeaderSection2";

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf",
      fontWeight: 100,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZhrib2Bg-4.ttf",
      fontWeight: 200,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf",
      fontWeight: 300,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf",
      fontWeight: 700,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf",
      fontWeight: 800,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZhrib2Bg-4.ttf",
      fontWeight: 900,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    paddingTop: 0,
    paddingHorizontal: 35,
    flex: 1,
    marginTop: "53mm",
    fontFamily: "Inter",
  },
  quotationReference: {
    flex: 1,
    marginTop: "-6mm",
    marginLeft: "15mm",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 60,
    fontSize: 14,
  },
  quotationNumber: {
    fontSize: 28,
    fontWeight: "600",
  },
  customerDetails: {
    marginTop: "6mm",
    maxHeight: 150,
    flex: 1,
  },
  heading: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  table: {
    display: "table",
    width: "auto",
  },
  summaryContainer: {
    fontSize: 10,
    flex: 1,
    flexDirection: "column",
    gap: 20,
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  summary: {
    paddingTop: 9,
    width: 250,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    textAlign: "left",
    borderTop: "1pt soild #000",
  },
  removeBorder: {
    border: "none",
  },
  footer: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 230,
    left: 43,
    fontSize: 8,
    maxWidth: "100%",
  },
  tcContainer: {
    width: "50%",
    textAlign:"justify",
    gap:"1mm"
  },
  signature: {
    fontWeight: "600",
    width: "50%",
    textAlign: "right",
    marginRight: 25,
    alignSelf: "flex-end"
  },
  tcHead: {
    fontWeight: "600",
  },
  tc: {
    flex: 1,
    flexDirection: "column",
  },
});

const PDFFile = ({ pdfData }) => {
  const { name, date, address } = pdfData.clientInfo;
  const { subtotal, gst, grandTotal, gstPercentage } = pdfData;
  const items = pdfData.items;
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <HeaderSection2 name={name} address={address} date={date} />
        {/* <HeaderSection name={name} address={address} date={date} /> */}
        <View style={styles.table}>
          <TableHeader />
          {items.map((item, index) => (
            <TableRow item={item} index={index} key={item.id} />
          ))}
          <View style={styles.summaryContainer}>
            <View style={[styles.summary, styles.removeBorder]}>
              <Text>Sub Total</Text>
              <Text>₹{subtotal}</Text>
            </View>
            <View style={styles.summary}>
              <Text>GST ({gstPercentage.percent}%)</Text>
              <Text>₹{gst}</Text>
            </View>
            <View style={styles.summary}>
              <Text>Total</Text>
              <Text>₹{grandTotal}</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.tcContainer}>
            <Text style={styles.tcHead}>Terms & Conditions</Text>
            <View style={styles.tc}>
              <Text>
                • Above Information is not an invoice and only an estimate of
                goods/services
              </Text>
              <Text>
                • Payment will be due prior to provision or delivery of
                goods/services
              </Text>
              <Text>
                • Rates applicable on road transportation are charged extra
              </Text>
            </View>
          </View>
          <View style={styles.signature}>
            <Text>Authorised Signature</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFFile;
