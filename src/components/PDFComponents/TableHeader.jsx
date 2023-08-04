import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  snoCol: {
    width: "6%",
  },
  itemNameCol: {
    // width: "62%",
  },
  priceCol: {
    width: "12%",
  },
  measureCol: {
    width: "6%",
  },
  totalPriceCol: {
    width: "14%",
  },
  tableHeader: {
    fontWeight: "600",
    paddingVertical: 8,
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
  },
  headerCell: {
    // margin: "auto",
    textAlign: "center",
    marginVertical: "auto",
    fontSize: 11,
  },
  lastCell: {
    textAlign: "right",
    paddingRight: "5mm"
  }
});

const TableHeader = ({ weightsPresent, qtyPresent }) => {
  return (
    <>
      <View style={[styles.tableRow, styles.tableHeader]}>
        <View style={styles.snoCol}>
          <Text style={styles.headerCell}>SLNo</Text>
        </View>
        <View style={{width: (qtyPresent && weightsPresent) ? "56%" : "62%"}}>
          <Text style={styles.headerCell}>Item</Text>
        </View>
        <View style={styles.priceCol}>
          <Text style={styles.headerCell}>Price</Text>
        </View>
        {weightsPresent &&
          <View style={styles.measureCol}>
            <Text style={styles.headerCell}>Wt.</Text>
          </View>
        }
        {qtyPresent &&
          <View style={styles.measureCol}>
            <Text style={styles.headerCell}>Qty.</Text>
          </View>
        }
        <View style={styles.totalPriceCol}>
          <Text style={[styles.headerCell, styles.lastCell]}>Total</Text>
        </View>
      </View>
    </>
  );
};

export { TableHeader };
