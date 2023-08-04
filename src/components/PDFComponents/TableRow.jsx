import { Text, View, StyleSheet } from "@react-pdf/renderer";
import isEmpty from "../checkEmpty";
const styles = StyleSheet.create({
  tableRow: {
    // margin: "auto",
    flexDirection: "row",
    marginTop: -0.25
    // alignItems: "center",
  },
  snoCol: {
    width: "6%",
    borderRight: "1 solid black"
  },
  itemNameCol: {
    borderRight: "1 solid black"
  },
  priceCol: {
    width: "12%",
    borderRight: "1 solid black"
  },
  qtyCol: {
    width: "6%",
    borderRight: "1 solid black"
  },
  totalPriceCol: {
    width: "14%",
  },
  tableCell: {
    paddingVertical: 8,
    fontSize: 10,
    textAlign: "center",

  },
  rightAlignedCell: {
    textAlign: "right",
  },

});
const TableRow = ({ item, index, weightsPresent, qtyPresent }) => {
  return (
    <>
      <View style={styles.tableRow}>
        <View style={styles.snoCol}>
          <Text style={styles.tableCell}>{index + 1}</Text>
        </View>
        <View style={[styles.itemNameCol, { width: (weightsPresent && qtyPresent) ? "58%" : "62%" }]}>
          <Text style={styles.tableCell}>{item.itemName}</Text>
        </View>
        <View style={styles.priceCol}>
          <Text style={styles.tableCell}>₹{item.price}</Text>
        </View>
        {weightsPresent &&
          <View style={styles.qtyCol}>
            <Text style={styles.tableCell}>{isEmpty(item.weight) ? "" : item.weight}</Text>
          </View>
        }
        {qtyPresent &&
          <View style={styles.qtyCol}>
            <Text style={styles.tableCell}>{isEmpty(item.qty===0) ? "" : item.qty}</Text>
          </View>
        }
        <View style={styles.totalPriceCol}>
          <Text style={[styles.tableCell, styles.rightAlignedCell]}>
            ₹{item.totalPrice}
          </Text>
        </View>
      </View>


    </>
  );
};

export { TableRow };
