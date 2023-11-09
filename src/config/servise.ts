export function handleNumberMask(text: string) {
    return text.replace(/[^0-9.-]/g, '').replace(/^(-)|-+/g, '$1').replace(/^([^.]*\.)|\.+/g, '$1')
}

export const formatter = new Intl.NumberFormat('uz-UZ', {
    style: 'currency',
    currency: 'Sum',
    minimumFractionDigits: 0
});

export const roundMath = (sum: number): number => {
    return Math.round(sum / 1000) * 1000
}