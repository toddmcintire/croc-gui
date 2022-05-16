#!/usr/bin/env zx
import { $ } from 'zx';
import 'zx/globals';

void async function zxTest(){
    let command = 'ls';
    await $`${command}`;

}

Neutralino.init();