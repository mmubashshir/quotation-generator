import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerSection: {
    maxHeight: 110,
    flex: 1,
    flexDirection: "column",

  },
  quotationAndDate: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

  },
  dateOfIssue: {
    fontSize: 11,
    // paddingRight: "5mm",
  },
  customerDetails: {
    flex: 1,
    flexDirection: "column",
    marginBottom: "6mm",
    marginLeft: "20mm",
    maxHeight: 150,
    fontSize: 11,
  },
  heading: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
const HeaderSection2 = ({ name, address, date }) => {
  return (
    <>
      <View style={styles.headerSection}>
        <View style={styles.quotationAndDate}>
          <Text>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;</Text>
          <Text style={styles.heading}>Quotation</Text>
          <Text style={styles.dateOfIssue}>{date}</Text>
        </View>

        <View style={styles.customerDetails}>
          <Text>{name}</Text>
          <Text>{address}</Text>
        </View>
      </View>
    </>
  );
};

export { HeaderSection2 };
