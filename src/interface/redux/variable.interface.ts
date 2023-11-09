export interface InitialStateProps {
    lang: string;
    loading: boolean;
    nbu: nbuDataProps[] | [];
    convert: currencyDataProps | null;
    convertList: currenciesDataProps | null;
}

export interface nbuDataProps {
    k: string;
}

export interface currencyDataProps {
    amount?: number,
    base: string,
    ms: number,
    result: {
        [key: string]: number
    }
}
export interface currenciesDataProps {
    base: string,
    ms: number,
    results: {
        [key: string]: number
    }
}