import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pagina: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  cabecalho: {
    height: 95,
    paddingTop: 25,
    paddingHorizontal: 20,
    backgroundColor: "#06245f",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  menu: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
  },

  nome: {
    flex: 1,
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
  },

  sino: {
    width: 25,
    height: 50,
  },

  foto: {
    width: 45,
    height: 45,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: "#ffffff",
  },

  conteudo: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    gap: 10,
  },

  cartao: {
    width: 340,
    height: 110,
    borderRadius: 18,
    overflow: "hidden",
    justifyContent: "center",

    boxShadow: '0px 7px 8px rgba(0, 0, 0, 0.25)',
  },

  backgroundCartao: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  conteudoCartao: {
    padding: 40,
    justifyContent: "center",
    right: 15,
    alignItems: "flex-start",
    gap: 2,
  },

  tituloClaro: {
    color: "#ffffff",
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "bold",
  },

  tituloEscuro: {
    color: "#000000",
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "bold",
  },

  descricaoClara: {
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 20,
  },

  descricaoEscura: {
    color: "#000000",
    fontSize: 16,
    lineHeight: 20,
  },

  negrito: {
    fontWeight: "bold",
  },

  rodape: {
    flex: 1,
    paddingHorizontal: 1,
    paddingBottom: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  imagemRodape: {
    width: 100,
    height: 70,
    resizeMode: "contain",
  },

  imagemRodagov: {
    width: 160,
    height: 70,
    resizeMode: "contain",
  },
});
export default styles;
