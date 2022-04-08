import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    width: '100%',
    height: 232,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 12,
  },
  containerFlatList: {
    width: '100%',
    paddingHorizontal: 26,
    paddingVertical: 22,
  },
  containerRenderItem: {
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
  },
  headerHender: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bebebe',
  },
  textHeader: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 19,
  },
  buttonClick: {
    padding: 5,
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClickOn: {
    backgroundColor: 'black',
    width: 16,
    height: 16,
    borderRadius: 30,
  },
  TextFlatList: {
    marginLeft: 12,
    fontSize: 12,
    color: '#000000',
    textTransform: 'uppercase',
    lineHeight: 16,
    fontFamily: 'Open Sans',
  },
  buttonSave: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#000000',
    width: 83.22,
    height: 20.22,
    borderRadius: 5,
    marginVertical: 16,
  },
  textStyleSave: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Open Sans',
    fontSize: 10,
  },
  iconClose: {
    color: '#000000',
    fontSize: 20,
  },
  containerOpenModal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C4C4C4',
    borderRadius: 25,
  },
  textOpenModal: {
    color: '#000000',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
    fontSize: 8,
    marginRight: 8,
    marginLeft: 6,
  },
  iconOpenModal: {
    backgroundColor: 'white',
    borderRadius: 50,
    color: 'black',
  },

  modal2background: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal2: {
    width: 327,
    height: 166,
    borderRadius: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textModal2: {
    marginTop: 17,
    marginBottom: 21,
    fontFamily: 'Source Sans Pro',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    color: '#000000',
  },
  buttonModal2: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#000000',
    width: 83.22,
    height: 20.22,
    borderRadius: 5,
  },
});
export default styles;
