import {StyleSheet, TextInput, View} from 'react-native';

export interface Props {
  placeHolder?: string | undefined;
  value?: string | undefined;
  onChangeText?: Function | undefined;
  containerStyle?: object | undefined;
  textStyle?: object | undefined;
  secureTextEntry?: boolean | undefined;
  keyboardType?: any | undefined;
}

const TextField: React.FC<Props> = ({
  placeHolder = 'Input',
  value,
  onChangeText = () => {},
  containerStyle,
  textStyle,
  secureTextEntry = false,
  keyboardType = 'default',
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.text, textStyle]}
        placeholder={placeHolder}
        value={value}
        onChangeText={(value: any) => onChangeText(value)}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
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
  text: {
    fontSize: 15,
    height: 50,
    width: '100%',
    paddingLeft: 10,
  },
});

export default TextField;
