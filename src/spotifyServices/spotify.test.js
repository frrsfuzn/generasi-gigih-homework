/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import useSpotify from "./spotify";
import {render} from "@testing-library/react"
import { rest } from "msw";
import { setupServer } from "msw/node";
import { store } from "../app/store";
import { Provider } from "react-redux";

const server = setupServer(
  rest.get("https://api.spotify.com/v1/search"),
  (req, res, ctx) => {
    ctx.status(200);
    ctx.json({
      data: {
        tracks: {
          items: [data],
        },
      },
    });
  }
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const MockSearchApi = ({ title }) => {
  const { searchTrack } = useSpotify();
  searchTrack(title);
  return
};

test("Test Search API Function", () => {
  render(
    <Provider store={store}>
      <MockSearchApi title="Bohemian Rhapsody" />
    </Provider>
  );
  const tracks = useAppSelector((state) => state.trackResult.selectedTracks);
  expect(tracks[0].name).toBe("Bohemian Rhapsody");
});