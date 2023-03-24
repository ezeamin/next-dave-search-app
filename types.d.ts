type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
};

// A result is not guaranteed
type SearchResult = {
  query?: {
    pages?: {
        [key: string]: Result;
    };
  };
};
