import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_60} />
      <View style={styles.View_1_84} />
      <View style={styles.View_1_85}>
        <Text style={styles.Text_1_85}>Top Questions</Text>
      </View>
      <View style={styles.View_1_76}>
        <Text style={styles.Text_1_76}>Trending Topics</Text>
      </View>
      <View style={styles.View_1_69} />
      <View style={styles.View_1_70} />
      <View style={styles.View_1_71}>
        <Text style={styles.Text_1_71}>Logo</Text>
      </View>
      <View style={styles.View_1_72}>
        <Text style={styles.Text_1_72}>Logo</Text>
      </View>
      <View style={styles.View_1_77} />
      <View style={styles.View_1_78} />
      <View style={styles.View_1_79} />
      <View style={styles.View_1_86} />
      <View style={styles.View_1_87} />
      <View style={styles.View_1_88} />
      <View style={styles.View_1_80} />
      <View style={styles.View_1_81} />
      <View style={styles.View_1_82} />
      <View style={styles.View_1_83} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_1_60: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_84: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("58%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_85: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_1_85: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_76: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_1_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_69: {
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
  View_1_70: {
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
  View_1_71: {
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
  Text_1_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_72: {
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
  Text_1_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_77: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("21%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_78: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("21%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_79: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("21%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_86: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("66%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_87: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("66%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_88: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("66%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_80: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("39%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_81: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("39%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_82: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("39%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_1_83: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("39%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
