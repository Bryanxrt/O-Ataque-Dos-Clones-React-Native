import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/styles';

export const Card = () => {
    return (
        <>
            <View style={styles.conteudo}>
                <TouchableOpacity style={styles.cartao}>
                    <Image
                        source={require('../../../assets/Condutor.png')}
                        style={styles.backgroundCartao} />

                    <View style={styles.conteudoCartao}>
                        <Text style={styles.tituloClaro}>CONDUTOR</Text>

                        <Text style={styles.descricaoClara}>
                            Gerencie sua{'\n'}
                            <Text style={styles.negrito}>habilitação</Text>
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cartao}>
                    <Image
                        source={require('../../../assets/veiculos.png')}
                        style={styles.backgroundCartao} />

                    <View style={styles.conteudoCartao}>
                        <Text style={styles.tituloEscuro}>VEÍCULOS</Text>

                        <Text style={styles.descricaoEscura}>
                            Acesse ao
                            <Text style={styles.negrito}> CRLV-e</Text>
                            {'\n'}venda digital
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartao}>
                    <Image
                        source={require('../../../assets/infracoes.png')}
                        style={styles.backgroundCartao} />

                    <View style={styles.conteudoCartao}>
                        <Text style={styles.tituloClaro}>INFRAÇÕES</Text>

                        <Text style={styles.descricaoClara}>
                            Visualize e pague infrações{'\n'}com até
                            <Text style={styles.negrito}> 40% de desconto</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartao}>
                    <Image
                        source={require('../../../assets/educacao.png')}
                        style={styles.backgroundCartao} />

                    <View style={styles.conteudoCartao}>
                        <Text style={styles.tituloEscuro}>EDUCAÇÃO</Text>

                        <Text style={styles.descricaoEscura}>
                            Conheça nossa{'\n'}
                            <Text style={styles.negrito}>plataforma de cursos</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
};

export default Card;
