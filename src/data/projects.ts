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
        id: "programa-nacional-formacao",
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
        id: "observatorio-tecnologia-assistiva",
        title: "Observatório de Tecnologia Assistiva",
        description: "Monitoramento e análise de dados sobre o ecossistema de TA no Brasil através do banco de dados ALAT.net.br.",
        fullDescription: "O Observatório de Tecnologia Assistiva é uma plataforma de inteligência que monitora o desenvolvimento, a produção e a distribuição de TA no Brasil.",
        category: "Pesquisa",
        image: "/images/project-2.jpg",
        status: "Em andamento",
        bgStyle: "bg-blue-50 border-blue-200",
        iconColor: "text-blue-600",
        badgeStyle: "bg-blue-100 text-blue-700"
    },
    {
        id: "lab-inovacao-aberta",
        title: "Lab de Inovação Aberta",
        description: "Espaço co-criativo para desenvolvimento de protótipos de baixo custo.",
        fullDescription: `
            <p>Um espaço maker dedicado à tecnologia assistiva, onde desenvolvedores, terapeutas e usuários co-criam soluções acessíveis e de código aberto.</p>
            <p>O Lab apoia projetos que utilizam impressão 3D, eletrônica básica e materiais adaptáveis para criar dispositivos personalizados.</p>
        `,
        category: "Inovação",
        image: "/images/project-3.jpg", // Using placholder 3 which corresponds to previous logo copy
        status: "Fase Piloto",
        bgStyle: "bg-blue-50 border-blue-200",
        iconColor: "text-blue-600",
        badgeStyle: "bg-blue-100 text-blue-700"
    }
];
