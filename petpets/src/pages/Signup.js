import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutations } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';