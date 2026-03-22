export declare const markdownExtensions: readonly string[];
export declare const markdownExtensionsSet: ReadonlySet<string>;

export declare function normalizeExtension(input: string): string;
export declare function isMarkdownExtension(input: string): boolean;
export declare function isMarkdownFile(input: string): boolean;

export default markdownExtensions;
