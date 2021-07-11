import React from 'react';
import './main.global.css'
import {Layout} from "./Layout";
import {Header} from "./Header";
import {Content} from "./Content";

const AppComponent = () => {
    return (
        <div>
            <Layout>
                <Header/>
                <Content>
                    content
                </Content>
            </Layout>

        </div>
    );
};

export default AppComponent;
