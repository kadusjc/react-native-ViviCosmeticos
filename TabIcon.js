import
class TabIcon extends React.Component {
    render() {
      /** some styling **/
      return (
        <View style={viewStyle}>
          <Text style={textStyle}>{this.props.title}</Text>
        </View>
      );
    }
  }