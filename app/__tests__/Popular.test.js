import React from "react";
import { act, render, cleanup } from "@testing-library/react";
import { fetchPopularRepos } from "../utils/api";
import Popular from "../components/Popular";
import ReposGrid from "../components/ReposGrid";
import { ThemeProvider } from "../contexts/theme";
import { readFileSync } from "fs";
import path from "path";

// Mocking Global fetch
jest.mock("node-fetch");
import fetch, { Response } from "node-fetch";

const AllPopular = JSON.parse(
  readFileSync(path.join(__dirname, "allpopular.json")).toString()
);

fetch.mockReturnValue(
  Promise.resolve({
    json: () => Promise.resolve(AllPopular),
  })
);

//this is necesary to be used by the other places that fetch the data
global.fetch = fetch;
// End mocking fetch

let populars;
afterEach(cleanup);

test("Test popular repos", (done) => {
  fetchPopularRepos("All").then((repos) => {
    populars = repos;
    const language = "All";
    const apiCall = `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`;
    const { getByTestId } = render(
      <ThemeProvider value={"light"}>
        <ReposGrid repos={repos} />
      </ThemeProvider>
    );

    const reposeGrid = getByTestId("repos-grid");
    expect(reposeGrid.children.length).toEqual(repos.length);
    expect(fetch).toHaveBeenCalledWith(apiCall);
    expect(reposeGrid).toMatchInlineSnapshot();
    done();
  });
});
