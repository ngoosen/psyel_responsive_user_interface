"use client";

import { ChangeEvent, useEffect, useState } from "react";

import styles from "../../style/components/ui/SearchBar.module.scss";

interface COURS_SEARCH_BAR_PROPS {
  onChange: CallableFunction;
}

export default function SearchBar(props: COURS_SEARCH_BAR_PROPS) {
  const { onChange, } = props;

  const [enteredValue, setEnteredValue] = useState<string>("");

  useEffect(() => {
    onChange(enteredValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredValue]);

  function changeValueHandler(e: ChangeEvent<HTMLInputElement>) {
    setEnteredValue(e.target.value);
  }

  return (
    <section className={styles.main}>
      <input type="text" name="" id="" placeholder="Rechercher" value={enteredValue} onChange={changeValueHandler} />
    </section>
  );
}

