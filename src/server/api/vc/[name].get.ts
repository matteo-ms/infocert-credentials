import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    if (name === undefined) return "error: No name set!";

    const contentQuery = await serverQueryContent(event).find();

    const matchedContent = contentQuery.find((content) => {
        return content.title === name;
    });

    if (matchedContent === undefined) {
        const n = contentQuery
            .filter((content) => {
                return content.navigation === undefined;
            })
            .map((content) => {
                return content.title;
            });

        return `error: No credential found named: \"${name}\". Available credentials: ${n.join(", ")}`;
    }

    const code = matchedContent.body.children.find((elem) => {
        return elem.tag === "pre" && elem.props?.language === "json";
    })?.props?.code;

    return JSON.parse(code);
});
