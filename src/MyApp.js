import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
class MyApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity onPress={() => this.props.incCounter()}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: "#487EB0",
                color: "#fff"
              }}
            >
              INCREASE
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              fontSize: 20
            }}
          >
            {this.props.myCounter}
          </Text>
          <TouchableOpacity onPress={() => this.props.decCounter()}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: "#EA425C",
                color: "#fff"
              }}
            >
              DECREASE
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center" }}>
          <TouchableOpacity onPress={() => this.props.resetCounter()}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 10,
                backgroundColor: "#43BE31",
                color: "#fff"
              }}
            >
              RESET
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
//
function mapStateToProps(state) {
  return {
    myCounter: state.myCounter
  };
}
//Function to Dispatch Action
function mapDispatchToProps(dispatch) {
  return {
    incCounter: () =>
      dispatch({
        type: "INC_COUNTER"
      }),
    resetCounter: () =>
      dispatch({
        type: "RESET"
      }),
    decCounter: () =>
      dispatch({
        type: "DEC_COUNTER"
      })
  };
}
//connect connects between redux & react
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
