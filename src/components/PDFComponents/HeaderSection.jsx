import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  quotationReference: {
    flex: 1,
    marginTop: "-7mm",
    marginLeft: "15mm",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    maxHeight: 60,
    fontSize: 12,
  },
  quotationNumber: {
    fontSize: 28,
    fontWeight: "600",
  },
  dateOfIssue: {
    paddingRight: "5mm",
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
});
const HeaderSection = ({name, address, date}) => {
  return (
    <>
      <Text style={styles.heading}>Quotation</Text>
      <View style={styles.quotationReference}>
        <View style={styles.customerDetails}>
          <Text>{name}</Text>
          <Text>{address}</Text>
        </View>
        <Text style={styles.dateOfIssue}>{date}</Text>
      </View>
    </>
  );
};

export { HeaderSection };
