import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is the Charlotte Unified Development Ordinance?",
        value: "What is the Charlotte Unified Development Ordinance?"
    },
    {
        text: "List the different zoning districts and compaire the major differences between them.",
        value: "List the different zoning districts and compaire the major differences between them."
    },
    { text: "Write a poem explaining the UDO.", value: "Write a poem explaining the UDO." }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
