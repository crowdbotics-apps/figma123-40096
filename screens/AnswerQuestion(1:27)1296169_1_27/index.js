import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
export class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <ScrollView contentContainerStyle={{
    flexGrow: 1
  }} style={styles.ScrollView_1}>
      <View style={styles.View_2} />
      <View style={styles.View_1_28} />
      <View style={styles.View_1_29} />
      <View style={styles.View_1_32} />
      <View style={styles.View_1_33} />
      <View style={styles.View_1_55} />
      <View style={styles.View_1_56} />
      <View style={styles.View_1_57} />
      <View style={styles.View_1_58} />
      <View style={styles.View_1_53} />
      <View style={styles.View_1_51} />
      <View style={styles.View_1_52} />
      <View style={styles.View_1_50} />
      <View style={styles.View_1_49} />
      <View style={styles.View_1_48} />
      <View style={styles.View_1_47} />
      <View style={styles.View_1_44} />
      <View style={styles.View_1_45}>
        <Text style={styles.Text_1_45}>Question 1: </Text>
      </View>
      <View style={styles.View_1_34}>
        <Text style={styles.Text_1_34}>Submit your answer</Text>
      </View>
      <View style={styles.View_1_37} />
      <View style={styles.View_1_38} />
      <View style={styles.View_1_39}>
        <Text style={styles.Text_1_39}>Logo</Text>
      </View>
      <View style={styles.View_1_40}>
        <Text style={styles.Text_1_40}>Logo</Text>
      </View>
      <View source={{
      uri: "null"
    }} style={styles.View_1_41} />
      <View style={styles.View_1_43}>
        <Text style={styles.Text_1_43}>Related questions:</Text>
      </View>
      <View style={styles.View_1_46}>
        <Text style={styles.Text_1_46}>Q1: Q2: Q3: Q4:</Text>
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2: {
    height: hp("115%")
  },
  View_1_28: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_29: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("63%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_32: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("75%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_33: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("84%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_55: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_56: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_57: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_58: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_53: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_51: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_52: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_50: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_49: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_48: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_47: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_44: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("13%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_45: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_1_45: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_34: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_1_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_37: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_38: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_39: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_40: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_1_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_41: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("66%")
  },
  View_1_43: {
    width: wp("54%"),
    minWidth: wp("54%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_1_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_46: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_1_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);