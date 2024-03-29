import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export interface Props {
  title?: string | undefined;
  onPress?: Function | undefined;
  containerStyle?: object | undefined;
  textStyle?: object | undefined;
}

const Button: React.FC<Props> = ({
  title = 'Submit',
  onPress = () => {},
  containerStyle,
  textStyle,
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity style={styles.button} onPress={() => onPress()}>
        <Text style={[styles.login, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
  },
  button: {
    width: '100%',
    backgroundColor: 'orange',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    fontSize: 20,
    fontWeight: '700',
    width: '100%',
    textAlign: 'center',
  },
});

export default Button;
