export interface Project {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    category: string;
    image: string;
    status: string;
    externalLink?: string;
    badgeStyle?: string;
    bgStyle?: string;
    iconColor?: string;
}

export const PROJECTS: Project[] = [
    {
        id: "1",
        title: "Programa Nacional de Formação",
        description: "Capacitação em larga escala para profissionais de saúde e educação no uso de tecnologias assistivas.",
        fullDescription: `
            <p>O Programa Nacional de Formação é uma iniciativa abrangente focada em capacitar profissionais do SUS e da rede pública de ensino para identificar, prescrever e acompanhar o uso de Tecnologias Assistivas.</p>
            <p>Através de cursos presenciais e EAD, o programa já certificou milhares de profissionais em todo o país, garantindo que o conhecimento chegue onde é mais necessário.</p>
            <h3>Objetivos Principais:</h3>
            <ul>
                <li>Capacitar equipes multidisciplinares</li>
                <li>Padronizar protocolos de atendimento</li>
                <li>Melhorar a qualidade de vida dos usuários finais</li>
            </ul>
        `,
        category: "Educação",
        image: "/images/project-1.jpg",
        status: "Em andamento",
        bgStyle: "bg-blue-50 border-blue-200",
        iconColor: "text-blue-600",
        badgeStyle: "bg-blue-100 text-blue-700"
    },
    {
        id: "2",
        title: "Observatório de Tecnologia Assistiva",
        description: "Monitoramento e análise de dados sobre o ecossistema de TA no Brasil através do banco de dados ALAT.net.br.",
        fullDescription: "O Observatório de Tecnologia Assistiva é uma plataforma de inteligência que monitora o desenvolvimento, a produção e a distribuição de TA no Brasil.",
        category: "Pesquisa",
        image: "/images/project-2.jpg",
        status: "Em andamento",
        externalLink: "https://alat.net.br",
        bgStyle: "bg-blue-50 border-blue-200",
        iconColor: "text-blue-600",
        badgeStyle: "bg-blue-100 text-blue-700"
    },
    {
        id: "3",
        title: "Apoio a Políticas Públicas",
        description: "Consultoria técnica para governos na elaboração de leis e diretrizes de acessibilidade.",
        fullDescription: `
            <p>A ABTECA atua diretamente no suporte à formulação de políticas públicas, fornecendo dados técnicos e expertise para legisladores e gestores públicos.</p>
            <p>Nosso trabalho visa criar um ambiente legal mais favorável à inclusão e ao desenvolvimento do setor de tecnologia assistiva no Brasil.</p>
        `,
        category: "Advocacy",
        image: "/images/project-3.jpg",
        status: "Permanente",
        bgStyle: "bg-green-50 border-green-200",
        iconColor: "text-green-600",
        badgeStyle: "bg-green-100 text-green-700"
    },
    {
        id: "4",
        title: "Incentivo à Inovação",
        description: "Fomento a startups e grupos de pesquisa que desenvolvem novos dispositivos de inclusão.",
        fullDescription: `
            <p>Através de parcerias e editais, apoiamos o nascimento e crescimento de startups focadas em acessibilidade.</p>
            <p>O programa inclui mentoria, conexão com investidores e suporte técnico para prototipagem e validação de produtos.</p>
        `,
        category: "Inovação",
        image: "/images/project-4.jpg",
        status: "Fase Piloto",
        bgStyle: "bg-purple-50 border-purple-200",
        iconColor: "text-purple-600",
        badgeStyle: "bg-purple-100 text-purple-700"
    },
    {
        id: "5",
        title: "Comunicação e Difusão",
        description: "Disseminação de conhecimento técnico e conscientização da sociedade sobre direitos e recursos.",
        fullDescription: `
            <p>A informação é o primeiro passo para o acesso. Nossas campanhas e canais de comunicação levam conhecimento sobre direitos e tecnologias disponíveis para a população.</p>
        `,
        category: "Comunicação",
        image: "/images/project-5.jpg",
        status: "Contínuo",
        bgStyle: "bg-orange-50 border-orange-200",
        iconColor: "text-orange-600",
        badgeStyle: "bg-orange-100 text-orange-700"
    },
    {
        id: "6",
        title: "Lab de Inovação Aberta",
        description: "Espaço co-criativo para desenvolvimento de protótipos de baixo custo.",
        fullDescription: `
            <p>Um espaço maker dedicado à tecnologia assistiva, onde desenvolvedores, terapeutas e usuários co-criam soluções acessíveis e de código aberto.</p>
        `,
        category: "Inovação",
        image: "/images/project-6.jpg",
        status: "Fase Piloto",
        bgStyle: "bg-yellow-50 border-yellow-200",
        iconColor: "text-yellow-600",
        badgeStyle: "bg-yellow-100 text-yellow-700"
    }
];
