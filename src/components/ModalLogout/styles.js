import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalSucessBackground: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalSucess: {
    width: 327,
    height: 166,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  modalBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,

  },
  textModalAtention: {
    alignSelf: 'flex-start',
    marginTop: 32,
    marginLeft: 32,
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000',
  },
  textModalSucess: {
    alignSelf: 'flex-start',
    marginTop: 17,
    marginLeft: 32,
    fontFamily: 'Source Sans Pro',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000',
  },
  buttonModalNo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    width: 83.22,
    height: 20.22,
    borderRadius: 5,
  },
  buttonModalYes: {
    marginLeft: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: 83.22,
    height: 20.22,
    borderRadius: 5,
  },
  textStyleNo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 10,
  },
  textStyleYes: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 10,
  },

});
export default styles;
