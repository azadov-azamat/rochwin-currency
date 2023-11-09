// import React from 'react';

import SelectInput from "../../inputs/select/select-input.tsx";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks.ts";
import {getMulti} from "../../../redux/reducers/variable.ts";
import {Button} from "@material-tailwind/react";

export default function ListCurrencyComponent() {

    const dispatch = useAppDispatch()
    const {nbu, loading, convertList} = useAppSelector(state => state.variables)

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)

                const data = {
                    from: formData.get('from'),
                    to: formData.get('from'),
                    api_key: '632a2646ba-d39ea6c572-s3stj3'
                }
                nbu.forEach(item => data.to += ", " + item.k)

                dispatch(getMulti(data))
            }} className={"flex gap-2 items-end"}>
                <SelectInput
                    required
                    label={"Base currency"}
                    name={"from"}
                    options={nbu}
                    optionValue={"k"}
                    optionLabel={"k"}
                />
            <Button type={"submit"} className={"px-4 py-3"} color={'green'} variant={'filled'}>Search</Button>
            </form>

            <div className="flex justify-center items-center my-10">
                {
                    loading ? <>
                        Loading...
                    </> : <>
                        {convertList !== null && <div className={"flex flex-col justify-start gap-2"}>
                            {Object.keys(convertList?.results || {}).map((item, ind) =>
                                <h4 key={ind}
                                    className={"font-bold text-sm flex items-center"}>1.00 {convertList.base} = <b
                                    className={"text-xl"}>{Object.values(convertList.results)[ind]} {item}</b></h4>)}
                        </div>}
                    </>
                }
            </div>
        </div>
    );
}