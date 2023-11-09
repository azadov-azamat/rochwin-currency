// import React from "react";
import {Card, CardBody, Tab, TabPanel, Tabs, TabsBody, TabsHeader} from "@material-tailwind/react";
import ParseCurrencyComponent from "../../components/currency/parse";
import ListCurrencyComponent from "../../components/currency/list";

export default function Home() {

    return (
        <div className={"w-full h-screen bg-mainBg bg-cover bg-center flex items-center justify-center"}>
            <Card className={"2xl:w-1/3 xl:w-1/4 md:w-1/2 w-11/12 rounded p-0"}>
                <CardBody>
                    <Tabs value={"isLastStep"}>
                        <TabsHeader className={"font-bold text-base"}>
                            <Tab value={"parse-currency"}
                                 className={'py-2 cursor-pointer hover:text-white hover:bg-gray-400 duration-500'}>
                                Converter
                            </Tab>
                            <Tab value={"currencies-list"}
                                 className={'py-2 cursor-pointer hover:text-white hover:bg-gray-400 duration-500'}>
                                Currencies
                            </Tab>
                        </TabsHeader>
                        <TabsBody>
                            <TabPanel value={"parse-currency"}>
                                <ParseCurrencyComponent/>
                            </TabPanel>
                            <TabPanel value={"currencies-list"}>
                                <ListCurrencyComponent/>
                            </TabPanel>
                        </TabsBody>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    );
}