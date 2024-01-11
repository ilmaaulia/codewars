const isPangram = string => new Set(string.toLowerCase().replace(/[^a-z]/g, "")).size === 26;
