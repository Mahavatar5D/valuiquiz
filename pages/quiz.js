import React from 'react';
import Head from 'next/head';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
      <Widget.Content>
        [Desafio do loading.]
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h3>
              Pergunta
              1
              de
              {`${db.questions.length}`}
            </h3>
          </Widget.Header>
          <img
            src="https://placehold.it/400x400"
            alt="descrição"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
          />
          <Widget.Content>
            <h2>
              Título
            </h2>
            <p>
              Descrição
            </p>
            <Button type="button">
              Confirmar
            </Button>
          </Widget.Content>
        </Widget>
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}
