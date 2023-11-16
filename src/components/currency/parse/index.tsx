// import React from 'react';

import {useAppDispatch, useAppSelector} from "../../../redux/hooks.ts";
import SelectInput from "../../inputs/select/select-input.tsx";
import {Button} from "@material-tailwind/react";
import TextInput from "../../inputs/text-input.tsx";
import {getConvert} from "../../../redux/reducers/variable.ts";

export default function ParseCurrencyComponent() {

    const dispatch = useAppDispatch()
    const {nbu, loading, convert} = useAppSelector(state => state.variables)
    // console.log(nbu)
    // console.log(convert)

    const firstKey = Object.keys(convert?.result || {})[0]
    const firstVal = Object.values(convert?.result || {})[0]

    return (
        <div className={""}>
            <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)

                const data = {
                    from: formData.get('from'),
                    to: formData.get('to'),
                    amount: formData.get('amount'),
                    api_key: 'ca7c7591a9-d84ff1114b-s47fzc'
                }

                dispatch(getConvert(data))
            }} className="grid md:grid-cols-4 grid-cols-2 items-end gap-2">
                <SelectInput
                    required
                    label={"From"}
                    name={"from"}
                    options={nbu}
                    optionValue={"k"}
                    optionLabel={"k"}
                />
                <SelectInput
                    required
                    label={"To"}
                    name={"to"}
                    options={nbu}
                    optionValue={"k"}
                    optionLabel={"k"}
                />
                <TextInput required type={'number'} label={"Amount"} name={'amount'} placeholder={"Enter amount..."}/>
                <Button type={'submit'} className={"bg-green-500 text-white py-3"} color={"red"}
                        variant={'filled'}>Convert</Button>
            </form>
            <div className="flex justify-center items-center my-10">
                {
                    loading ? <>
                        Loading...
                    </> : <>
                        {convert !== null && <div className={"flex justify-center items-center"}>
                            <h4 className={"font-bold text-sm"}>{convert?.amount + ' ' + convert.base} = </h4>
                            <h2 className={"font-bold text-xl"}>{firstVal} {firstKey}</h2>
                        </div>}
                    </>
                }
            </div>
        </div>
    );
}