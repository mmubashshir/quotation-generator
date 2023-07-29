import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  snoCol: {
    width: "6%",
  },
  firstCol: {
    width: "43%",
  },
  tableCol: {
    width: "17%",
  },
  tableHeader: {
    fontWeight: "600",
    padding: 8,
    alignItems: "center",
    backgroundColor: "#000",
    color: "#fff",
  },
  headerCell: {
    margin: "auto",
    fontSize: 11,
  },
  lastCell: {
    textAlign: "center"
  }
});

const TableHeader = () => {
  return (
    <>
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
          <Text style={[styles.headerCell, styles.lastCell]}>Total</Text>
        </View>
      </View>
    </>
  );
};

export { TableHeader };
