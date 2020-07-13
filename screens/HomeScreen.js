const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Find screen"
        onPress={() =>
          navigation.navigate('Find')
        }
      />
    );
  };
