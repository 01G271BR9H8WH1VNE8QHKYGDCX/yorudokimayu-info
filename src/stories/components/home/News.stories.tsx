import { ComponentStory, ComponentMeta } from "@storybook/react";
import News from "../../../components/home/News";

export default {
    title: 'components/home/News',
    component: News,
    parameters: {layout: 'fullscreen'}
} as ComponentMeta<typeof News>;

const Template: ComponentStory<typeof News> = (args) => <News {...args} />;
export const withNews = Template.bind({});
withNews.args = {
    news: [
        {
            text: "タイトルのみでリンクなし"
        },
        {
            text: "タイトルとリンク", 
            links: [
                {name: "リンク1", url: "https://locahost:6666"},
                {name: "リンク2", url: "https://locahost:6666"},
            ]
        }
    ]
};
export const withoutNews = Template.bind({});
withoutNews.args = {
    news: []
};