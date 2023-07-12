import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import "../index.css";

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
    padding: 20,
    flex: 1,
    paddingBottom: 0,
    marginTop: '50mm',
    fontFamily: "Inter",
    
  },
  quotationReference: {
    flex: 1,
    // gap: 20,
    marginLeft: "15mm",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 60,
    fontSize: 14
  },
  quotationNumber: {
    fontSize: 28,
    fontWeight: "600",
  },
  dateOfIssue: {
    paddingRight: "10mm"
  },
  customerDetails: {
    
    maxHeight: 150,
    flex: 1,
  },
  heading: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center"
  },
  table: {
    display: "table",
    width: "auto",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    alignItems: "center"
  },
  snoCol: {
    width: "6%"
  },
  firstCol: {
    width: "43%",
  },
  tableCol: {
    width: "17%",
  },
  tableCell: {
    paddingVertical: 10,
    fontSize: 11,
    textAlign: "center"
  },
  rightAlignedCell: {
    textAlign: "right",
  },
  hline: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
  tableHeader: {
    fontSize: 25,
    fontWeight: "700",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
  },
  headerCell: {
    margin: "auto",
    fontSize: 12
  },
  summaryContainer: {
    fontSize: 11,
    flex: 1,
    flexDirection: "column",
    gap: 20,
    alignItems: "flex-end",
    justifyContent: "flex-start"
  },
  summary: {
    paddingVertical: 10,
    width: 250,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "left",
    borderTop: "1pt soild #000",
  },
  removeBorder: {
    border: "none"
  },
  tcContainer: {
    position: "absolute",
    flex: 1,
    bottom: 200,
    left: 20,
    fontSize: 10,
    maxWidth: "50%"
  },
  tcHead: {
    fontWeight: "600"
  },
  tc: {
    flex: 1,
    flexDirection: "column"
  },
});

const PDFFile = ({ pdfData }) => {
  const { name, email, title, date, address } = pdfData.clientInfo;
  const { subtotal, gst, grandTotal } = pdfData;
  const items = pdfData.items;
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
      <Text style={styles.heading}>Quotation</Text>
        <View style={styles.quotationReference}>
          <View style={styles.customerDetails}>
            <Text>Sharadha Vidhyanikethana{name}</Text>
            <Text>KCRoad{"\n"}
              Mangalore {address}</Text>
          </View><Text style={styles.dateOfIssue}>{date}</Text>
        </View>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <View style={styles.snoCol}>
              <Text style={styles.headerCell}>Sno</Text>
            </View>
            <View style={styles.firstCol}>
              <Text style={styles.headerCell}>Product</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.headerCell}>Price</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.headerCell}>Qty.</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.headerCell}>Total</Text>
            </View>
          </View>
          {items.map((item, index) => (
            <>
              <View style={styles.tableRow}>
                <View style={styles.snoCol}>
                  <Text style={styles.tableCell}>
                    {index + 1}
                  </Text>
                </View>
                <View style={styles.firstCol}>
                  <Text style={styles.tableCell}>
                    {item.itemName}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>₹{item.price}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.qty}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={[styles.tableCell, styles.rightAlignedCell]}>₹{item.totalPrice}</Text>
                </View>
              </View>
              <View style={styles.hline}></View>
            </>
          ))}
          <View style={styles.summaryContainer}>
            <View style={[styles.summary, styles.removeBorder]}>
              <Text>Sub Total</Text>
              <Text>₹{subtotal}</Text>
            </View>
            <View style={styles.summary}>
              <Text>GST</Text>
              <Text>₹{gst}</Text>
            </View>
            <View style={styles.summary}>
              <Text>Total</Text>
              <Text>₹{grandTotal}</Text>
            </View>
          </View>
        </View>

        <View style={styles.tcContainer}>
          <Text style={styles.tcHead}>Terms & Conditions</Text>
          <View style={styles.tc}>
            <Text>• Above Information is not an invoice and only an estimate of goods/services</Text>
            <Text>• Payment will be due prior to provision or delivery of goods/services</Text>
            <Text>• Rates applicable on road transportation are charged extra</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default (PDFFile);
