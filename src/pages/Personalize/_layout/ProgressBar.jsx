import { ProgressBar, ProgressBarItem } from './styles'

export const ProgressBarHeader = (props) => {
  const { active } = props;
  return (
    <ProgressBar>
      <ProgressBarItem active={active === "background" ? true : false}>
        <strong>1</strong>
        <span>Escolha o fundo</span>
      </ProgressBarItem>
  
      <ProgressBarItem active={active === "image" ? true : false}>
        <strong>2</strong>
        <span>Adicione uma foto</span>
      </ProgressBarItem>
  
      <ProgressBarItem active={active === "stickers" ? true : false}>
        <strong>3</strong>
        <span>Stickers e Personalização</span>
      </ProgressBarItem>

      <ProgressBarItem active={active === "text" ? true : false}>
        <strong>4</strong>
        <span>Adicione Texto</span>
      </ProgressBarItem>
    </ProgressBar>
  );
}

