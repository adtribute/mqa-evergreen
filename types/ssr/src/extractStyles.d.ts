/**
 * @returns {{ css: string, cache: { uiBoxCache: [string, string][] }, hydrationScript: React.ReactElement }}
 */
export default function extractStyles(options?: {}): {
    css: string;
    cache: {
        uiBoxCache: [string, string][];
    };
    hydrationScript: React.ReactElement;
};
import React from "react";
