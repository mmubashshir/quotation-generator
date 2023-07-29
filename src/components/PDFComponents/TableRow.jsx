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
  tableCell: {
    paddingVertical: 8,
    fontSize: 10,
    textAlign: "center",
  },
  rightAlignedCell: {
    textAlign: "right",
  },
  hline: {
    width: "100%",
    height: 1,
    backgroundColor: "#000",
  },
});
const TableRow = ({item, index}) => {
  return (
    <>
      <View style={styles.tableRow}>
        <View style={styles.snoCol}>
          <Text style={styles.tableCell}>{index + 1}</Text>
        </View>
        <View style={styles.firstCol}>
          <Text style={styles.tableCell}>{item.itemName}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>₹{item.price}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{item.qty}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={[styles.tableCell, styles.rightAlignedCell]}>
            ₹{item.totalPrice}
          </Text>
        </View>
      </View>
      <View style={styles.hline}></View>
    </>
  );
};

export { TableRow };
