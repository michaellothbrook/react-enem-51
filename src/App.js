import React from 'react';

import './assets/styles/global.css';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Subject from './components/Subject';

import signupArrowDown from './assets/images/arrow-down.png';
import Teacher from './components/Teacher';
import Enem from './components/Enem';
import Classe from './components/Classe';
import Video from './components/Video';
import Value from './components/Value';

function App() {

  return (
    <div className="App">
        <Header />
        <Presentation>
          <div className="text-center signup">
            <h5>INSCREVA-SE</h5>
            <img width="80px" src={signupArrowDown} alt="Inscreva-se" />
          </div>
          <Subject
            color={"#4A5C65"}
            title="REDAÇÃO NOTA 1000"
            info="A redação no Enem é o espaço para pleno exercício da cidadania do candidato. O curso Redação Enem tem como objetivo o desenvolvimento específico da habilidade do aluno em  correlacionar seus próprios conhecimentos e os direitos humanos, sob a perspectiva de uma orientação argumentativa baseada em repertórios socioculturais de diferentes áreas do conhecimento."
          >
            <Teacher course="CURTADURACAO" subject="redacaoEnem" background_color={'#4A5C65'} />
          </Subject>
          <Subject
            color={'#02BDC7'}
            title="BIOQUÍMICA E FÍSICA"
            info="Neste curso, a parte de Bioquímica é interdisciplinar, com a presença simultânea de dois professores e a parte de Física aborda as transformações de energia."
          >
            <Teacher course="CURTADURACAO" subject="bioquimica" background_color={'#02BDC7'} />
          </Subject>
          <Subject
            color={"#FFB600"}
            title="ATUALIDADES"
            info="Na prova do Enem são abordados temas atuais. O curso Atualidades é interdisciplinar, com a presença simultânea de dois professores tratando os eventos que se destacaram no mundo nos últimos anos e temas de grande repercussão."
          >
            <Teacher course="CURTADURACAO" subject="atualidades" background_color={'#FFB600'} />
          </Subject>
          <Subject
            color={'#FC4067'}
            title="MATEMÁTICA MIL"
            info="Os conceitos de matemática serão aplicados em três itens essenciais: situações-problema envolvendo função do segundo grau, análise combinatória e pagamentos parcelados."
          >
            <Teacher course="CURTADURACAO" subject="matematica" background_color={'#FC4067'} />
          </Subject>
        </Presentation>
        <Enem />
        <Classe />
        <Video />
        <Value />
    </div>
  );
}

export default App;
