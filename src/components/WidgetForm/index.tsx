import { useState } from 'react'

import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
 
import bugImageUrl from '../../assets/bug.svg'
import bulbImageUrl from '../../assets/bulb.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: "Idéia",
    image: {
      source: bulbImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
        feedbackType={feedbackType}
        onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}
      <footer className="text-xs text-neutral-400">
        Feito com 💜 {" "} 
        <a className="underline underline-offset-2" href="https://rocketseat.com.br" target="_blank">
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
