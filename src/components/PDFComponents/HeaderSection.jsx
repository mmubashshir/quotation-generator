import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  headerSection: {
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
    paddingRight: "5mm",
  },
  heading: {
    fontFamily: "Inter",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  w50: {
    width: "50%",
  },
  w100: {
    width: "100%",
  },
  mt10: {
    marginTop: "10px",
  },
  mb10: {
    marginBottom: "10px",
  },
  px40: {
    paddingHorizontal: "40px",
  },
  pl100: {
    paddingHorizontal: "100px",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  centerText: {
    textAlign: "center",
  },
  rightText: {
    textAlign: "right",
  },
  absolute: {
    position: "absolute",
  },
  top48: {
    top: "45mm",
  },
  top55: {
    top: "55mm",
  },
});
const HeaderSection = ({ name, address, date }) => {
  return (
    <>
      <View style={[styles.flex, styles.absolute, styles.top48]}>
        <View style={styles.w100}>
          <Text style={[styles.centerText, styles.heading]}>Quotation</Text>
        </View>
      </View>
      <View style={[styles.flex, styles.px40, styles.absolute, styles.top55]}>
        <View style={styles.w100}>
          <Text style={[styles.rightText, styles.dateOfIssue]}>14-05-2023</Text>
        </View>
      </View>

      <View style={[styles.flex, styles.pl100]}>
        <Text>{name}</Text>
      </View>
      <View style={[styles.flex, styles.pl100, styles.mb10]}>
        <Text>{address}</Text>
      </View>
    </>
  );
};

export { HeaderSection };
