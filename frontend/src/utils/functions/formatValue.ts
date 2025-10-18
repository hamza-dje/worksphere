export default function formatValue(value: number | `$${number}`) {
    const isNumber = typeof value === "number";
    const valueNum = isNumber ? value : Number(value.slice(1));
    const formatted = valueNum.toLocaleString("en-US");
    return isNumber ? formatted : `$${formatted}`;
}
