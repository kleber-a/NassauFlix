import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  text: {
    color: '#FFF',
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  containerLoading: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 150,
  },
  boxText: {
    alignItems: 'center',
    marginTop: 30,
  },
  containerLista: {
    width: '100%',
    height: '100%',
  },
  boxLista: {
    backgroundColor: '#8F9AFC',
    width: '90%',
    height: 80,
    marginTop: 15,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  boxDescription: {
    width: 200,
    height: '100%',
    paddingHorizontal: 40,
    justifyContent: 'space-around',
    borderRadius: 10,
  },
  numberMovies: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
  },
  nameList: {
    width: 160,
    marginTop: 2,
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Open Sans',
  },

  del: {
    backgroundColor: '#E9A6A6',
    width: 30,
    height: 78,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  viewplus: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  add: {
    bottom: 35,
    right: 40,
    position: 'absolute',
    backgroundColor: '#E9A6A6',
    borderRadius: 30,
    borderColor: '#FFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 51,
    height: 51,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    zIndex: 2,
    elevation: 6,
    shadowColor: '#100',
    shadowOpacity: 0.2,
    shadowRadius: 30,
  },
  //Início Modal
  backgroundModal: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerModal: {
    width: '90%',
    paddingHorizontal: 21,
    paddingBottom: 21,
    paddingTop: 11,
    height: 166,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 25,
  },
  //Inicio Box Text
  boxTextModal: {
    width: '100%',
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textModal: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
  //Fim Box Text

  //Inicio Box Input
  nameListModal: {
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    width: '100%',
    height: 28,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 6,
    color: '#000000',
    fontFamily: 'Souce Sans Pro',
    fontSize: 12,
  },
  descriptionListModal: {
    paddingHorizontal: 16,
    paddingVertical: 2,
    lineHeight: 15,
    backgroundColor: 'rgba(196, 196, 196, 0.35)',
    width: '100%',
    height: 42,
    marginTop: 5,
    borderRadius: 5,
    fontFamily: 'Souce Sans Pro',
    fontSize: 12,
    color: '#000',
  },
  //Fim Box Input
  boxButtonModal: {
    marginTop: 17,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCancelModal: {
    marginRight: 15,
    width: 80,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSaveModal: {
    width: 80,
    height: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonModal: {
    fontSize: 10,
    fontWeight: '700',
    color: 'black',
  },
  //Fim Modal
  containerAnimated: {
    width: '90%',
    height: 30,
    backgroundColor: 'rgba(15, 200, 30, 0.95)',
    borderColor: 'rgba(25, 255, 60, 0.95)',
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    zIndex: 3,
    elevation: 8,
    shadowColor: '#010',
    shadowOpacity: 0.9,
    shadowRadius: 30,
  },
  boxAnimated: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-between',
  },
  textAnimated: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
  Icon: {
    backgroundColor: '#eee',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonx: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
