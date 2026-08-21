import PostArticle from "@/components/post-article";
import {
    getPostMetadata,
    getPostParams,
    type PostRouteProps,
} from "@/lib/posts";

const TYPE = "thoughts";

export function generateStaticParams() {
    return getPostParams(TYPE);
}

export function generateMetadata({ params }: PostRouteProps) {
    return getPostMetadata(TYPE, params);
}

export default async function ThoughtPage({ params }: PostRouteProps) {
    const { slug } = await params;
    return <PostArticle type={TYPE} slug={slug} backLabel="back to writings" />;
}
