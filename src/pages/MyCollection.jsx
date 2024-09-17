import React from "react";
import { useSearchParams } from "react-router-dom";
import SubNav from "../components/SubNav";
import AuctionCard from "../components/Cards/Auction";
import DetailNft from "../components/Cards/DetailNft";
import LazyLoadImage from "../components/lazyImage/LazyImage";

const MyCollection = () => {
  const [searchParams] = useSearchParams();
  const tokenId = searchParams.get("tokenId");

  const DComponent = ({ imgSrc, profileImgSrc, title, itemsCount }) => {
    return (
      <div
        className="CollectionCard relative p-4 rounded-2xl overflow-hidden h-[410px] flex justify-center flex-col group cursor-pointer"
        style={{ width: "250px" }}
      >
        <div className="nc-NcImage absolute inset-0">
          <img
            src={imgSrc}
            alt="nc-imgs"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 group-hover:h-full to-transparent"></div>
        <div className="relative mt-auto mb-3">
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src={profileImgSrc}
              alt="profile"
            />
            <div className="ml-2 text-white text-xl">
              <span className="font-normal">By</span>{" "}
              <span className="font-bold">new profile</span>
            </div>
          </div>
          <h2 className="font-semibold text-3xl mt-1.5 text-white">{title}</h2>
          <div className="text-lg text-white">{itemsCount}</div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="custom-modal"
      style={{
        backgroundColor: "rgba(19, 19, 29, 0.99)",
        marginTop: "100px",
      }}
    >
      <div className="custom-modal__inner">
        <div className="nft-detail">
          <div className="nft-detail__wrapper">
            <main>
              <div class="pb-6 mt-6">
                <div class="flex flex-col justify-between relative rounded-lg bg-[transparent] min-h-screen">
                  <div>
                    <div class="grid grid-cols-2 sm:grid-cols-5 gap-5 p-6">
                      <div class="h-full flex flex-col gap-3">
                        <a
                          class="flex items-center justify-center border rounded-2xl bg-white shadow-lg hover:border-violet-500 cursor-pointer grow"
                          data-testid="create-collection"
                          id="create-collection"
                          data-headlessui-state=""
                          href="/collections/create"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            class="h-10 w-10"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            ></path>
                          </svg>
                        </a>
                        <p>Create new collection</p>
                      </div>
                      <div class="flex flex-col gap-3">
                        <a
                          class="rounded-2xl border shadow-lg hover:border-violet-500 cursor-pointer"
                          data-testid="collection-syntaxloom2"
                          id="collection-syntaxloom2"
                          data-headlessui-state=""
                          href="/collections/syntaxloom2"
                        >
                          <img
                            alt="syntaxloom"
                            class="w-full h-auto aspect-square object-cover rounded-2xl"
                            src="https://cdn.mintable.com/collections/01j7zrwxh0wa2xphwzf1ar61m9"
                          />
                        </a>
                        <p class="break-words">syntaxloom</p>
                      </div>
                      <div class="flex flex-col gap-3">
                        <a
                          class="rounded-2xl border shadow-lg hover:border-violet-500 cursor-pointer"
                          data-testid="collection-syntaxloom"
                          id="collection-syntaxloom"
                          data-headlessui-state=""
                          href="/collections/syntaxloom"
                        >
                          <img
                            alt="syntaxloom"
                            class="w-full h-auto aspect-square object-cover rounded-2xl"
                            src="https://cdn.mintable.com/collections/01j7zrth5eq0yy0c3ygym4hb1r"
                          />
                        </a>
                        <p class="break-words">syntaxloom</p>
                      </div>
                    </div>
                  </div>
                  <div class="px-8 mb-6">
                    <div class="flex flex-col sm:flex-row items-center justify-between rounded-xl bg-gradient-to-r from-violet-50 to-cyan-50 p-4">
                      <div class="flex items-center gap-4">
                        <div class="flex gap-2">
                          <img
                            alt="Mintology"
                            class="h-6"
                            src="/mintology-icon-logo.svg"
                          />
                          <span>Looking for more minting options?</span>
                        </div>
                        <div>
                          <span>
                            Check out{" "}
                            <a
                              class="text-primary-500"
                              data-testid="self-server-link"
                              id="self-server-link"
                              data-headlessui-state=""
                              href="https://mintology.app/"
                            >
                              Mintology
                            </a>{" "}
                            now!
                          </span>
                        </div>
                      </div>
                      <a
                        class="flex py-2.5 px-5 rounded-3xl border border-violet-500 justify-center items-center gap-3 hover:border-cyan-500 cursor-pointer"
                        data-testid="lets-go"
                        id="lets-go"
                        data-headlessui-state=""
                        href="https://mintology.app/"
                      >
                        <span class="text-nowrap">Let's go</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                          class="h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollection;
