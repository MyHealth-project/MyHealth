import Topic3Image from '../../assets/accident.jpg';
import Topic1Image from '../../assets/QuemSomos003.jpg';
import Topic2Image from '../../assets/zello_saude.jpg';
import Header from "../../components/Header";
import DefaultTopic from "./components/DefaultTopic";
import { Topics } from './styles';

const Home = () => {
    return (
        <>
            <Header />
            <Topics>
                <DefaultTopic backgroundImage={Topic1Image}>
                    <h2>Quem Somos?</h2>
                    <p>
                        Somos da equipe SosTech formado por universitarios do Centro Universitário fametro. No nosso estudo analisamos
                        o processo de verificação de dados pessoais relacionados à saúde da vítima de acidente de trânsito, através
                        de uma aplicação web que tem seu enfoque em dados como:
                    </p>
                    <ul>
                        <li>tipo sanguíneo</li>
                        <li>alergias</li>
                        <li>doenças crônicas</li>
                        <li>uso de remédios controlados</li>
                    </ul>
                    <p>
                        Dentre outros. Tendo como objetivo agilidade e diminuição no tempo de resposta para obtenção de dados cruciais
                        para o atendimento de pessoas que venham a passar por um trauma.
                    </p>
                </DefaultTopic>
                <DefaultTopic backgroundImage={Topic2Image}>
                    <h2>Porque voce deve usar o MyHealth?</h2>
                    <p>
                        Constatou-se através de pesquisas e comparações de dados que o website My Health pode vir a ser uma ferramenta
                        a otimizar a obtenção de dados cruciais quando trata-se de vítimas de acidentes de trânsito, visto que seu
                        intuito tende a ser uma etiqueta móvel que facilitará e agilizará o primeiro atendimento em casos de acidentes
                        de trânsito, deixando ciente o socorrista de observações importantes relacionadas a saúde do mesmo.
                    </p>
                </DefaultTopic>
                <DefaultTopic backgroundImage={Topic3Image}>
                    <h2>Usabilidade no dia-a-dia</h2>
                    <p>
                        Na nossa aplicação haverá um formulário com perguntas sobre a saúde do paciente que deverá ser respondido pelo
                        usuário após a criação de um perfil no Website, caso haja alguma mudança no estado de saúde o questionário
                        poderá ser modificado e atualizado. É recomendado atualizar as informações a cada 6 meses. A implementação do
                        software My Health tem como objetivo a diminuição no tempo de resposta para obtenção de dados de vítimas de acidentes
                        de trânsito.
                    </p>
                </DefaultTopic>
            </Topics>
        </>
    );
}

export default Home;