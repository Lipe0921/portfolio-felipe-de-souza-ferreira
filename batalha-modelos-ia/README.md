# ⚔️ Batalha de Modelos & Engenharia de Prompt (XML)

## 📝 O Desafio
O objetivo foi construir um **Prompt Estruturado em XML** para gerar uma página HTML Single Page para a marca **Grão & Pausa**[cite: 1]. O foco foi testar a precisão, criatividade e eficiência de diferentes LLMs.

## 📊 Minha Análise Técnica
Após testar em diversas ferramentas, documentei os seguintes resultados:

*   **Vencedor em Compreensão:** O **Gemini** demonstrou maior entendimento da estrutura XML e foi o mais fiel aos itens solicitados[cite: 1].
*   **Performance de Design:** Enquanto o **Gemini** inovou nas imagens, modelos como o **Grok** tiveram uma precisão péssima, criando imagens desconexas (como praias)[cite: 1].
*   **Eficiência (Tokens):** Houve uma diferença enorme na geração. O **Maritaca** gastou apenas 650 tokens, enquanto o **Claude** gerou 5.200 tokens para o mesmo pedido[cite: 1].
*   **Veredito de Uso:** Para prototipagem rápida, escolhi o **Gemini**. Para códigos mais complexos, o **DeepSeek** se mostrou mais adequado[cite: 1].

## 🛠 O Prompt Estruturado
```xml
<tarefa>
<objetivo>Criar uma página HTML5 única com CSS3 interno (single page).</objetivo>
<tema> Grão & Pausa </tema>
<diretrizes_design>
<layout>Responsivo e minimalista.</layout>
<paleta_cores> Branco Papel (#ffffff), Preto Grafite (#1a1a1a) e Marrom Caramelo
(#bc6c25)</paleta_cores>
<tipografia>Sans-serif para títulos, Serif para corpo.</tipografia>
</diretrizes_design>
<obrigatoriedades_tecnicas>
<item>Menu de navegação funcional (âncoras).</item>
<item>Seção de portfólio ou galeria.</item>
<item>Rodapé com informações de contato simuladas.</item>
<item> Efeito de transição suave </item>
</obrigatoriedades_tecnicas>
<metrica_obrigatoria>
Ao final da resposta, informe uma estimativa de quantos tokens foram gerados para este código.
</metrica_obrigatoria>
</tarefa>
