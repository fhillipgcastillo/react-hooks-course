import React from "react";
import { act, render, cleanup } from "@testing-library/react";
import { fetchPopularRepos } from "../utils/api";
import ReposGrid from "../components/ReposGrid";
import { ThemeProvider } from "../contexts/theme";
import { readFileSync } from "fs";
import path from "path";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.mockClear();
});

afterEach(cleanup);

let populars;

// TODO: create a function that tha mock depending of the language as example

it("Should get All repose", (done) => {
  fetch.mockResponseOnce(
    readFileSync(path.join(__dirname, "./allpopular.json")).toString()
  );

  fetchPopularRepos("All").then((repos) => {
    populars = repos;
    const language = "All";
    const allReposApiUri = `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`;
    expect(fetch).toHaveBeenCalledWith(allReposApiUri);

    done();
  });
});

it("Should Repos Grid render the same amount of repos as the api response", (done) => {
  fetch.mockResponseOnce(
    readFileSync(path.join(__dirname, "./allpopular.json")).toString()
  );
  const repos = populars;

  const { getByTestId } = render(
    <ThemeProvider value={"light"}>
      <ReposGrid repos={repos} />
    </ThemeProvider>
  );

  const reposeGrid = getByTestId("repos-grid");
  expect(reposeGrid.children.length).toEqual(repos.length);
  // expect(reposeGrid).toMatchInlineSnapshot();
  done();
});
