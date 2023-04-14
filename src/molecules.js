export default [{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'result': ['CC(C)(C)c1ccc(C(=O)Nc2ccccc2O)c(c1)C(C)(C)',
        'CC(C)(C)c1ccc(OCCN(C)C)c(c1)C(C)(C)',
        'CC(C)(C)c1ccc(OCCNC(=O)c2ccccc2F)c(c1)C(C)(C)',
        'CC(C)(C)c1ccc(O)nc1N(C)C(=O)CC2CC2',
        'CC(C)(C)c1ccc(O)c(c1)NC(=O)C(C)(C)C'],
    'model': 'gpt-3.5-turbo',
    'type': 'mutate'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'result': ['Cc1ccccc1C=C',
        'Cc1cccc(C#N)c1',
        'Cc1cccc(C=O)c1',
        'Cc1cccc(C=CCN)c1',
        'Cc1ccccc1C(CC)C'],
    'model': 'gpt-3.5-turbo',
    'type': 'mutate'
},
{
    'left': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': ['CCOC(=O)N1CCC(CC1)c2cccnc2',
        'CCNC(=O)c1ccc(cc1)Nc2nccc(n2)c3cccnc3',
        'CC(C)Nc1ccccc1Nc2nccc(n2)c3cccnc3',
        'CC(C)NC(=O)c1ccc(cc1)Nc2nccc(n2)c3cccnc3',
        'CC(C)Nc1ccc(cc1)Nc2nccc(n2)c3cccnc3'],
    'model': 'gpt-3.5-turbo',
    'type': 'mutate'
},
{
    'left': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': ['O=C(C)Oc1ccccc1C(=O)N',
        'O=C(C)Oc1ccccc1C(=O)N(C)C',
        'O=C(C)Oc1ccccc1C(=O)OC',
        'O=C(C)Oc1ccc(Cl)cc1C(=O)O',
        'O=C(C)Oc1ccccc1C#N'],
    'model': 'gpt-3.5-turbo',
    'type': 'mutate'
},
{
    'left': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': ['C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
        'CC1=C(OCCOCCN=C2C3=CC=CC=C3C(OCCOCC)=C2)C=CC(=C1)[N+]([O-])=O',
        'CCCC(C)(C)C(=O)NC1=NN=C(C2=C1C=CC=C2)C(F)(F)F',
        'COP(=O)(CC)OC1C2=CC=CC=C2C(=O)NC2=NC=C(N=C12)N',
        'CC(=O)N[C@@H](CC1=CC=C(O)C=C1)C(=O)NC1=CN=C(N=C1)C1=CC=CC=C1'],
    'model': 'gpt-3.5-turbo',
    'type': 'mutate'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'Cc1cccc(C=C)c1',
    'result': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C\\C=C\\c1ccccc1',
    'type': 'add',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(C(C)(C)C/C=C/c2ccccc2)c1',
    'right': 'Cc1cccc(C=C)c1',
    'result': 'CCCC1=CC=C(C=C1)C',
    'type': 'sub',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C can be combined to form CC(C)(C)c1ccc(O)c(c1)C(C)(C)CNc2cccnc2NC(=O)c3ccc(cc3)CN4CCN(CC4)C',
    'type': 'add',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'Cc1ccc(NC(=O)c2ccc(CN3CCN(C)CC3)cc2)cc1Nc1nccc(-c2cccnc2)n1',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'CCC1=CC=C(NC(=O)C2=CC=C(CN3CCN(C)CC3)C=C2)C=C1N1C=CC=C2C(NC3=NC=C(N3)C3=CC=CC=N3)=NC=CN12',
    'type': 'sub',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)COC(=O)c1ccccc1C(=O)O',
    'type': 'add',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(C(C)(C)COC(=O)c2ccccc2C(=O)O)c1',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'O=C(C)Oc1ccccc1C(=O)O - CC(C)(C)c1ccc(O)c(C(C)(C)COC(=O)c2ccccc2C(=O)O)c1 → O=C(C)Oc1ccccc1C(=O)OCC(C)(C)c1ccc(O)c(C(C)(C)COC(=O)c2ccccc2C(=O)O)c1',
    'type': 'sub',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': '  [Si]1(C)(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]1(C)(C))C2N=C(F)C(F)=NC12',
    'type': 'add',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'c1ccc(C=C)c(C)c1Nc2nccc(n2)c3cccnc3NC(=O)c4ccc(CN5CCN(CC5)C)c(c4)C',
    'type': 'add',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'C=Cc1cccc(Nc2nccc(-c3cccnc3NC(=O)c3ccc(CN4CCN(C)CC4)c(C)c3)n2)c1C',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'CCc1ccc(C(=O)N2CCN(CC2)c2cccc(NC(=O)c3ccc(cc3)N3CCN(CC3)C)c2)c(C)c1',
    'type': 'sub',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': '',
    'type': 'add',
    'model': 'gpt-3.5-turbo'
},
{
    'left': '',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'OC(=O)c1ccccc1C(=O)O',
    'type': 'sub',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'type': 'add',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': '',
    'type': 'sub',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'O=C(C)Oc1ccccc1C(=O)O',
    'type': 'add',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'CC(=O)Oc1ccccc1C(=O)O',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'CC(=O)O',
    'type': 'sub',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'type': 'add',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': '',
    'type': 'sub',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'O=C(C)Oc1ccccc1C(=O)O',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': '[Si]12(CC(OC(C)=O)cccc1)C(C)(C)C(OCCOC1=CC=CC=C1C(OC(C)=O)=C1C=CC=C(C2=C3OCCOC3=C(F)C(F)=NC13)C1)=O',
    'type': 'add',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'C[Si]1C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': '',
    'type': 'sub',
    'model': 'gpt-3.5-turbo'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'result': ['CC(C)(C)c1ccc(O)c(N)c1C(C)(C)C',
        'CC(C)(c1ccc(O)c(N)c1C(C)(C)C)C1CC1',
        'CCc1ccc(O)cc1C(C)(C)C',
        'C1CC1C(c2ccc(O)cc2C)C(C)(C)C',
        'C1=CCCCC1c2ccc(O)c(c2)C(C)(C)C'],
    'model': 'gpt-4',
    'type': 'mutate'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'result': ['CC1=CCCC=C1',
        'Cc1ccc(C)cc1',
        'CC1=CCC=CC1',
        'CCCC1=CC=CC=C1',
        'CC1=CCCCC1'],
    'model': 'gpt-4',
    'type': 'mutate'
},
{
    'left': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': ['Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)CCCCCC',
        'Cc1ccc(cc1Nc2ncc(c(n2)c3ccc(nc3)C#N)N(=O)=O)NC(=O)c4ccc(cc4)CN5CCN(CC5)CC',
        'Cc1ccc(cc1Nc2nccc(n2)c3ccc(nc3)C(=O)O)NC(=O)c4ccc(cc4)CN5CCN(CC5)COC',
        'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)N6CCOCC6',
        'Cc1ccc(cc1Nc2nccc(n2)c3cc(ccn3)C)NC(=O)c4ccc(cc4)CN5CCN(CC5)CS'],
    'model': 'gpt-4',
    'type': 'mutate'
},
{
    'left': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': ['C1=CC(=O)C2C(=O)C=C(OC2=C1)O',
        'OC(=O)C1=C(CC=O)C(O)=CC=C1',
        'O=C(O)C1=CC(OC2=CC=CC=C2)=CC=C1O',
        'C1=CC(=O)OC(C(=O)O)C=C1',
        'O=C(C(=O)O)c1ccc(OC2=CC=CC=C2C=O)cc1'],
    'model': 'gpt-4',
    'type': 'mutate'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'Cc1cccc(C=C)c1',
    'result': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)CCc2cccc(C=C)c2',
    'type': 'add',
    'model': 'gpt-4'
},
{
    'left': 'C=Cc1cccc(CCC(C)(C)c2cc(C(C)(C)C)ccc2O)c1',
    'right': 'Cc1cccc(C=C)c1',
    'result': 'Cc1cccc(C)c1',
    'type': 'sub',
    'model': 'gpt-4'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)CCc2ccc(cc2Nc3nccc(n3)c4cccnc4)NC(=O)c5ccc(cc5)CN6CCN(CC6)C',
    'type': 'add',
    'model': 'gpt-4'
},
{
    'left': 'CN1CCN(Cc2ccc(C(=O)Nc3ccc(CCC(C)(C)c4cc(C(C)(C)C)ccc4O)c(Nc4nccc(-c5cccnc5)n4)c3)cc2)CC1',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)C',
    'type': 'sub',
    'model': 'gpt-4'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'CC(C)(C)c1ccc(OCC(=O)Oc2ccccc2C(=O)O)c(c1)C(C)(C)C',
    'type': 'add',
    'model': 'gpt-4'
},
{
    'left': 'CC(C)(C)c1ccc(OCC(=O)Oc2ccccc2C(=O)O)c(C(C)(C)C)c1',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'CC(C)(C)c1ccc(Oc2ccccc2C(=O)O)c(C(C)(C)C)c1',
    'type': 'sub',
    'model': 'gpt-4'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'C[Si](C)(C)c1ccc(-c2ccc3c(c2)[SiH2]C(=C3OCCO1)C1=CC=C(-c3c4OCCOc4cc4N=C(F)C(F)=NC34)C2N=C(F)C(F)=NC12)C(C)(C)C',
    'type': 'add',
    'model': 'gpt-4'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'Cc1cccc(C=CCc2ccc(cc2Nc3nccc(n3)c4cccnc4)NC(=O)c5ccc(cc5)CN6CCN(CC6)C)c1',
    'type': 'add',
    'model': 'gpt-4'
},
{
    'left': 'Cc1cccc(C=CCc2ccc(NC(=O)c3ccc(CN4CCN(C)CC4)cc3)cc2Nc2nccc(-c3cccnc3)n2)c1',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'Cc1ccc(cc1Nc1nccc(n1)c1cccnc1)NC(=O)c1ccc(cc1)CN1CCN(CC1)C',
    'type': 'sub',
    'model': 'gpt-4'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'CC(=O)Oc1ccccc1C(=O)OCCc1cccc(C=C)c1',
    'type': 'add',
    'model': 'gpt-4'
},
{
    'left': 'C=Cc1cccc(CCOC(=O)c2ccccc2OC(C)=O)c1',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'O=C(C)Oc1ccccc1',
    'type': 'sub',
    'model': 'gpt-4'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'C=CC1=CC=C(C2=C(Si(C)C=C2C)C2=CC=C(C3=C(Si(C)C=C3C)C3N=C(F)C(F)=NC3=N2)C2N=C(F)C(F)=NC12)C=C1',
    'type': 'add',
    'model': 'gpt-4'
},
{
    'left': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'CC(=O)Nc1ccc(cc1Nc2nccc(n2)c3cccnc3)CN4CCN(CC4)COC(=O)C(=O)c5ccccc5',
    'type': 'add',
    'model': 'gpt-4'
},
{
    'left': 'CC(=O)Nc1ccc(CN2CCN(COC(=O)C(=O)c3ccccc3)CC2)cc1Nc1nccc(-c2cccnc2)n1',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'O=C(C)Oc1ccccc1C(=O)OC(C(=O)Nc1ccc(CN2CCN(COC(=O)C(=O)c3ccccc3)CC2)cc1Nc1nccc(-c2cccnc2)n1)Nc1ccc(-c2cccnc2)nccc1N',
    'type': 'sub',
    'model': 'gpt-4'
},
{
    'left': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'type': 'add',
    'model': 'gpt-4'
},
{
    'left': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C)C2N=C(F)C(F)=NC12',
    'type': 'sub',
    'model': 'gpt-4'
},
{
    'left': 'O=C(C)Oc1ccccc1C(=O)O',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'O=C(C)Oc1ccccc1C(=O)OCC2=C(O[Si]1(C)C=C1C)C1=CC=C(C3=C4OCCOC4=[Si]C3(C)C)C3N=C(F)C(F)=NC123',
    'type': 'add',
    'model': 'gpt-4'
},
{
    'left': 'CC(=O)Oc1ccccc1C(=O)OCC1=C(O[Si]2(C)C=C2C)C2=CC=C(C3=C4OCCOC4=[Si]C3(C)C)C3N=C(F)C(F)=NC213',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'C[Si](C)(C=C(O1CCOC1))C1=Cc2cc(C3NC(F)=NC(F)=C3)ncc2C(Cc2ccc(O1CCOC1)cc2)=[Si]C1CCC1',
    'type': 'sub',
    'model': 'gpt-4'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'result': ['C(=O)c1ccc(O)c(c1)C(C)(C)C'],
    'model': 'text-curie-001',
    'type': 'mutate'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'result': ['Cc1ccccc1',
        'C=C',
        'c1ccccc1',
        'Cc1ccccc1',
        'Cc1ccccc1',
        'Cc1ccccc1',
        'C=C',
        'c1ccccc1',
        'Cs1cccs1',
        'Cc1ccccc1'],
    'model': 'text-curie-001',
    'type': 'mutate'
},
{
    'left': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': ['O=C(C)Oc1ccccc1C(=O)O',
        'O=C(C)Oc1ccccc1C(=O)O',
        'O=C(C)Oc1ccccc1C(=O)O',
        'O=C(C)Oc1ccccc1C(=O)O',
        'O=C(C)Oc1ccccc1C(=O)O',
        'O=C(C)Oc1ccccc1C(=O)O',
        'O=C(C)Oc1ccccc1C(=O)O',
        'O=C(C)Oc1ccccc1C(=O)O'],
    'model': 'text-curie-001',
    'type': 'mutate'
},
{
    'left': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': ['C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12'],
    'model': 'text-curie-001',
    'type': 'mutate'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'Cc1cccc(C=C)c1',
    'result': 'CC=C',
    'type': 'add',
    'model': 'text-curie-001'
},
{
    'left': 'C=C',
    'right': 'Cc1cccc(C=C)c1',
    'result': '',
    'type': 'sub',
    'model': 'text-curie-001'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'type': 'add',
    'model': 'text-curie-001'
},
{
    'left': 'Cc1ccc(NC(=O)c2ccc(CN3CCN(C)CC3)cc2)cc1Nc1nccc(-c2cccnc2)n1',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C6',
    'type': 'sub',
    'model': 'text-curie-001'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'O=C(C)Oc1ccccc1C(=O)O',
    'type': 'add',
    'model': 'text-curie-001'
},
{
    'left': 'CC(C)C',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'CC-C-O-C-C-O-O',
    'type': 'sub',
    'model': 'text-curie-001'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': '',
    'type': 'add',
    'model': 'text-curie-001'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'c1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'type': 'add',
    'model': 'text-curie-001'
},
{
    'left': 'C=Cc1ccccc1',
    'right': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C6',
    'type': 'sub',
    'model': 'text-curie-001'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'Cc1cccc(C=C)c1C(=O)O',
    'type': 'add',
    'model': 'text-curie-001'
},
{
    'left': 'C=Cc1cccc(C)c1C(=O)O',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'c1ccccc1C(=O)O',
    'type': 'sub',
    'model': 'text-curie-001'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'CCCCCCCCC1=C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'type': 'add',
    'model': 'text-curie-001'
},
{
    'left': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'type': 'add',
    'model': 'text-curie-001'
},
{
    'left': 'Cc1ccc(NC(=O)c2ccc(CN3CCN(C)CC3)cc2)cc1Nc1nccc(-c2cccnc2)n1',
    'right': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': 'O-C1CCCCC1-C=O',
    'type': 'sub',
    'model': 'text-curie-001'
},
{
    'left': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'type': 'add',
    'model': 'text-curie-001'
},
{
    'left': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'type': 'sub',
    'model': 'text-curie-001'
},
{
    'left': 'O=C(C)Oc1ccccc1C(=O)O',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'C=C(C)Oc1ccccc1C(=O)O',
    'type': 'add',
    'model': 'text-curie-001'
},
{
    'left': 'C=C(C)Oc1ccccc1C(=O)O',
    'right': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': 'Subtract C=C(C)Oc1ccccc1C(=O)O from C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'type': 'sub',
    'model': 'text-curie-001'
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'result': ['CC1(C)C2(C)C3(C)C=C(C3C(C)(C)C2C1C)c4ccc(O)c(c4)C(C)(C)C',
        'CC1(C)C2(C)C3(C)C=C(C3C(C)(C)C2C1C)c4ccc(N)c(c4)C(C)(C)C',
        'CC1(C)C2(C)C3(C)C=C(C3C(C)(C)C2C1C)c4ccc(S)c(c4)C(C)(C)C',
        'CC1(C)C2(C)C3(C)C=C(C3C(C)(C)C2C1C)c4ccc(F)c(c4)C(C)(C)C'],
    'model': 'text-davinci-003',
    'type': 'mutate'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'result': ['CC1=C(C(C(C(C1)O)O)O)C',
        'CC1=C(C(C(C(C1)O)O)N)C',
        'CC1=C(C(C(C(C1)N)N)N)C',
        'CC1=C(C(C(C(C1)S)S)S)C',
        'CC1=C(C(C(C(C1)F)F)F)C'],
    'model': 'text-davinci-003',
    'type': 'mutate'
},
{
    'left': 'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C',
    'result': ['Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CNC(=O)C6CCN(CC6)C',
        'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CNC(=O)C6CCC(=O)N(CC6)C',
        'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CNC(=O)C6CC=CC(=O)N(C6)C',
        'Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CNC(=O)C6C=CC(=O)N(CC6)C'],
    'model': 'text-davinci-003',
    'type': 'mutate'
},
{
    'left': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': ['CC(C)(C)Oc1ccc(O)cc1C(=O)O',
        'CC(=O)Oc1cc(O)ccc1C(C)(C)O',
        'O=C(C)Oc1ccc(C(=O)O)cc1',
        'CC(C)(C)Oc1ccc(C(=O)O)cc1',
        'CC(=O)Oc1ccc(C)cc1C(C)(C)O'],
    'model': 'text-davinci-003',
    'type': 'mutate'
},
{
    'left': 'C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
    'result': ['[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
        '[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
        '[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12',
        '[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12'],
    'model': 'text-davinci-003',
    'type': 'mutate'
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1cccc(C=C)c1",
    "result": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)CC=Cc1ccccc1",
    "type": "add",
    "model": "text-davinci-003"
},
{
    "left": "CC(C)(C)c1ccc(O)c(C(C)(C)CC=Cc2ccccc2)c1",
    "right": "Cc1cccc(C=C)c1",
    "result": "CC(=Cc1ccccc1)C(C)(C)CC(C)C",
    "type": "sub",
    "model": "text-davinci-003"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)CNC(=O)c1ccc(cc1Nc2nccc(n2)c3cccnc3)CN5CCN(CC5)C",
    "type": "add",
    "model": "text-davinci-003"
},
{
    "left": "CN1CCN(Cc2ccc(C(=O)NCC(C)(C)c3cc(C(C)(C)C)ccc3O)c(Nc3nccc(-c4cccnc4)n3)c2)CC1",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)Cc2ccc(C(=O)NCC(C)(C)c3cc(C(C)(C)C)ccc3O)c(Nc3nccc(-c4cccnc4)n3)c2",
    "type": "sub",
    "model": "text-davinci-003"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C(=O)Oc1ccccc1C(=O)O",
    "type": "add",
    "model": "text-davinci-003"
},
{
    "left": "CC(C)(C)c1ccc(O)c(C(C)(C)C(=O)Oc2ccccc2C(=O)O)c1",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CC(C)(C)C(=O)Oc1ccccc1",
    "type": "sub",
    "model": "text-davinci-003"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C1=C(C[Si]2(C)C=C3OCCOC3=C2C2=CC=C(C3=C4OCCOC4=C[Si]3(C)C)C4N=C(F)C(F)=NC24)C=CC=C1",
    "type": "add",
    "model": "text-davinci-003"
},
{
    "left": "CC(C)(C)c1ccc(O)c(C(C)(C)c2ccccc2C[Si]2(C)C=C3OCCOC3=C2C2=CC=C(C3=C4OCCOC4=C[Si]3(C)C)C3N=C(F)C(F)=NC23)c1",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "CC(C)(C)c1ccc(O)c(C(C)(C)c2ccccc2C[Si]2(C)C=C3OCCOC3=C2C2=CC=CN2C3=C4OCCOC4=C[Si]3(C)C)c1",
    "type": "sub",
    "model": "text-davinci-003"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "Cc1ccc2c(cc1C=C)c3ccc(Nc4nccc(n4)c5cccnc5)ccc23NC(=O)c6ccc(cc6)CN7CCN(CC7)C",
    "type": "add",
    "model": "text-davinci-003"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "Cc1cccc(C=C)c1O=C(C)Oc1ccccc1C(=O)O",
    "type": "add",
    "model": "text-davinci-003"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "Cc1ccc(C=C)cc1C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "type": "add",
    "model": "text-davinci-003"
},
{
    "left": "C=Cc1ccc(C)c(C[Si]2(C)C=C3OCCOC3=C2C2=CC=C(C3=C4OCCOC4=C[Si]3(C)C)C3N=C(F)C(F)=NC23)c1",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "C1[Si]2(C)C=C3OCCOC3=C2C2=CC=C(C3=C4OCCOC4=C[Si]3(C)C2N=C(F)C(F)=NC13)C1",
    "type": "sub",
    "model": "text-davinci-003"
},
{
    "left": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CC1=C(C(=O)Nc2ccc(cc2Nc3nccc(n3)c4cccnc4)C1)N(Cc5ccc(cc5)CN6CCN(CC6)C)C(=O)C7CCCCC7",
    "type": "add",
    "model": "text-davinci-003"
},
{
    "left": "CC1=C(N(Cc2ccc(CN3CCN(C)CC3)cc2)C(=O)C2CCCCC2)C(=O)Nc2ccc(cc2Nc2nccc(-c3cccnc3)n2)C1",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CC1=CN(Cc2ccc(CN3CCN(C)CC3)cc2)C(=O)C2CCCCC2Nc2ccc(cc2Nc2nccc(-c3cccnc3)n2)C1",
    "type": "sub",
    "model": "text-davinci-003"
},
{
    "left": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "type": "add",
    "model": "text-davinci-003"
},
{
    "left": "Cc1ccc(NC(=O)c2ccc(CN3CCN(C[Si]4(C)C=C5OCCOC5=C4C4=CC=C(C5=C6OCCOC6=C[Si]5(C)C)C5N=C(F)C(F)=NC45)CC3)cc2)cc1Nc1nccc(-c2cccnc2)n1",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "Cc1ccc(NC(=O)c2ccc(CN3CCN(C[Si]4(C)C=C5OCCOC5=C4C4=CC=C(C5=C6OCCOC6=C[Si]5(C)C)C5N=C(F)C(F)=NC45)CC3)cc2)cc1N",
    "type": "sub",
    "model": "text-davinci-003"
},
{
    "left": "O=C(C)Oc1ccccc1C(=O)O",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "O=C(C)Oc1ccccc1C(=O)OC[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "type": "add",
    "model": "text-davinci-003"
},
{
    "left": "CC(=O)Oc1ccccc1C(=O)OC[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "CC(=O)Oc1ccccc1C(=O)OC",
    "type": "sub",
    "model": "text-davinci-003"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "result": [
        "CN1C=NC2=C1C(=O)N(C(=O)N2C)C",
        "Cc1cccc(C)c1OCc1ccc(C(C)C)cc1",
        "CC(C)(C)c1cncc(C)c1O",
        "Cc1ccccc1C(C)(C)CO",
        "CC(C)(C)CCC(=O)N1CCN(CC1)C\\C=C/c1ccccc1"
    ],
    "model": "claude-v1.2",
    "type": "mutate"
},
{
    "left": "Cc1cccc(C=C)c1",
    "result": [
        "C=CCc1ccccc1",
        "C/C(=C\\C)c1ccccc1",
        "C=C\\C=C/c1ccccc1",
        "CC(=C)C(C=C)c1ccccc1",
        "C/C(=C/C)c1ccccc1"
    ],
    "model": "claude-v1.2",
    "type": "mutate"
},
{
    "left": "O=C(C)Oc1ccccc1C(=O)O",
    "result": [
        "Cn1c(=O)c2ccccc12",
        "COc1ccc(C(=O)O)cc1",
        "CN1C(=O)c2ccccc12",
        "CC(C)=C\\C(=O)O/c1ccccc1",
        "O=Cc1ccc(C(=O)O)cc1"
    ],
    "model": "claude-v1.2",
    "type": "mutate"
},
{
    "left": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": [
        "C1=C=C(CC=C2OCCOC2=NC(=NC(=O)C3CCOC(C(=O)C4=CC=CC=C4)=C3)F)SC1",
        "C1=C=C(CC=C2OCCOC2=NC=NC(=O)C(=O)COC3=CC=CC=C3)SC1"
    ],
    "model": "claude-v1.2",
    "type": "mutate"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1cccc(C=C)c1",
    "result": "C[C@]12CC[C@H]3[C@H]2C[C@](C)(C)[C@@H](OC4=CC=CC(=C4)C(C)(C)C)[C@@H](C)[C@]4(C)CC[C@@H]5[C@@H]4CC[C@@H]5C3",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1cccc(C=C)c1",
    "result": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)CC=C",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "C=CCC(C)(C)c1cc(C(C)(C)C)ccc1O",
    "right": "Cc1cccc(C=C)c1",
    "result": "CCCCCCCC(C)(C)c1cc(C(C)(C)C)ccc1O - Cc1cccc(C=C)c1\nCc1cccc(C)c1",
    "type": "sub",
    "model": "claude-v1.2"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)Cc6ccc(cc6Nc7nccc(n7)c8cccnc8)NC(=O)c9ccc(cc9)CN%10CCN(CC10)C",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CC(C)(Oc1ccccc1C(=O)O)c1ccc(O)c(c1)C(C)(C)C",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "CC(C)(C)c1cc(C(C)(C)Oc2ccccc2C(=O)O)ccc1O",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "O=C(C)Oc1ccc(C(C)(C)Oc2ccccc2C(=O)O)cc1",
    "type": "sub",
    "model": "claude-v1.2"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)CNC(=O)C1=C[Si]2(C)CCOC2=C1C1=CC=C(c2oc3ccccc3c2)C2N=C(F)C(F)=NC12",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "CC(C)(C)c1ccc(O)c(C(C)(C)CNC(=O)C2=C[Si]3(C)CCOC3=C2C2=CC=C(c3cc4ccccc4o3)C3N=C(F)C(F)=NC23)c1",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "C1=CC=C(C2=C3OCCOC3=C[Si](C)C2CCC(=O)NC(C)(C)C)C([Si](C)CC(O)(C(C)(C)CNC(=O)C2=C[Si](C)CCOC2=C3C=CC=C3c2cc3ccccc3o2)c1)C2N=C(F)C(F)=NC12",
    "type": "sub",
    "model": "claude-v1.2"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "CCN1CCN(CC1)C(=O)Nc2ccc(cc2)c3nccc(n3)Nc4ccc(cc4=C)C=C",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CC(=O)Oc1cccc(C=CCc2ccccc2)c1C(=O)O",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "CC(=O)Oc1cccc(C=CCc2ccccc2)c1C(=O)O",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "O=C(C)Oc1ccc(/C=CCc2ccccc2)cc1C(=O)O",
    "type": "sub",
    "model": "claude-v1.2"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "Nc1c(F)c(NC2=C(C=CC=C1C3OCCOC3=CC=C2C)C4OCCOC4=CC=CC(C)=C)C(F)=N",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CN1CCN(CC1)c2ccccc2NC(=O)c3cccc(c3)Nc4nccc(n4)c5ccc(NC)cc5",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "CNc1ccc(-c2ccnc(Nc3cccc(C(=O)Nc4ccccc4N4CCN(C)CC4)c3)n2)cc1",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CNc1ccc(c2ccnc(Nc3cccc(N4CCN(C)CC4)c3)n2)cc1",
    "type": "sub",
    "model": "claude-v1.2"
},
{
    "left": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "CC1=C[C+]([C+]([OC]([C+]([OC]([C+]([OC]([C+]1C)C)(CC2=C3NC(=O)C(=C4N=C(F)C(=C4)C)CC(C3CCC2)N(C)C)CC3=C([Si]([C]([C#N]4CC(C4)C)(C)[C]3=C(C)C)C)C)C)C)C",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "O=C(C)Oc1ccccc1C(=O)O",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "O=C(C)Oc1ccccc1C(=O)OCC1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "type": "add",
    "model": "claude-v1.2"
},
{
    "left": "CC(=O)Oc1ccccc1C(=O)OCC1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "CN1C=NC(=C1F)C1=CC=C(C2=C3OCCOC3=CC2)",
    "type": "sub",
    "model": "claude-v1.2"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "result": [
        "CC(C)(C)CCC(C)(C)C",
        "C(CCC)(CCC)C",
        "CCC(=O)CN(C)C(C)(C)C",
        "O=CCC(NC(C)=O)Nc1ccc(Cl)cc1",
        "CCC(F)C",
        "CC(F)C"
    ],
    "model": "claude-instant-v1",
    "type": "mutate"
},
{
    "left": "Cc1cccc(C=C)c1",
    "result": [
        "Cc1ccc(F)cc1",
        "CCCCC=C",
        "CC(O)=NC1=CNC=N1",
        "CCCN(CCC(C)C)Cl",
        "CCCN(CCC(C)C)CCC"
    ],
    "model": "claude-instant-v1",
    "type": "mutate"
},
{
    "left": "O=C(C)Oc1ccccc1C(=O)O",
    "result": [
        "CCCc1ccccc1CCC"
    ],
    "model": "claude-instant-v1",
    "type": "mutate"
},
{
    "left": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": [
        "C[Si]1(C)C=C2OCCOC2=C1C1=CC=CCC1",
        "OCCC1=CN=C(F)C(F)=NCCC1",
        "C[Si]2(C=CC3OCCOC3=C2C=C)C3N=C(F)C(F)=NCCC3",
        "CCCNC1=NC2=C(OCCO)C(CC3C)C=C3C=CCC=C12",
        "CCC1SCOCSC1N=C(F)C(Cl)F",
        "COC1=CC=C(C=CC=N)CN(C)CC1C1=CNC=C2OCCOC2=C1",
        "OCCOC1=CNC2C3CCOCCOC3C2=C1C1=NC2=C(OCCO)SC2=CNC1"
    ],
    "model": "claude-instant-v1",
    "type": "mutate"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1cccc(C=C)c1",
    "result": "Cc1ccc(cc1)C(C)(C)c1ccc(O)c(c1)C(C)(C)c2c[nH+]c3ccc4c[nH+]c(C)(C)([O-])=NC5=C(N5)c6ccccc6",
    "type": "add",
    "model": "claude-instant-v1"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "c1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C \nCCCc1ccc(O)c(c1)C(C)(C)CCCNC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "type": "add",
    "model": "claude-instant-v1"
},
{
    "left": "CN1CCN(Cc2ccc(C(=O)Nc3cccc(Nc4nccc(-c5cccnc5)n4)c3)cc2)CC1",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C \nNC(=O)c1ccc(cc1CN2CCCN(Cc3ccc(C(=O)Nc4cccc(Nc5ccccn5)c4)cc3)CC2)C",
    "type": "sub",
    "model": "claude-instant-v1"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "C1CCC2C(CCC1C)(CCC[O])OC(O)C \nCC3CC4C5C7C8O7C7CCC5C4CCC3C1CCC2C(CCC1C)(CCC[O])OC(O)C",
    "type": "add",
    "model": "claude-instant-v1"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C \nCCC(C)(C)c1ccc(O)c(c1)C(C)(C)CC1=NSiC2=NC3=CC=C(C=O)O3C=C2NC1=O \nC1=CCC=C2C(O)=C3OCCOC3=C[Si](C)(C)C2=C1",
    "type": "add",
    "model": "claude-instant-v1"
},
{
    "left": "CC(C)(C)c1ccc(O)c(C(C)(C)C)c1",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "O=C(CO)Cc1ccccc1c2ccccc2 \nC1CCCCC1SCC1(OC)CCCC1",
    "type": "sub",
    "model": "claude-instant-v1"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "Cc1cccc(C=C)c1Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "type": "add",
    "model": "claude-instant-v1"
},
{
    "left": "C=Cc1cccc(C)c1Cc1ccc(NC(=O)c2ccc(CN3CCN(C)CC3)cc2)cc1Nc1nccc(-c2cccnc2)n1",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(C)CC5 \nCc1ccc(cc1NC(=O)c2ccc(cnc3CCCO)cc2)Nc1nccc(-c2cccnc2)n1",
    "type": "sub",
    "model": "claude-instant-v1"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CN(CCC)CCC1CCC(O)OC(=O)c1COC(=O)O",
    "type": "add",
    "model": "claude-instant-v1"
},
{
    "left": "CCCN(C)CCC1CCC(O)OC(=O)C1COC(=O)O",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "  CC=CNC1N(C2CCC(O)OC(=O)C3COC(=O)O)CCC2CCC3",
    "type": "sub",
    "model": "claude-instant-v1"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "C1cccc(C=C)c1 \nC[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12 \n\nCCC1COCCC1C([Si](C)(C)CC)C2NC(=O)C(F)FCN2",
    "type": "add",
    "model": "claude-instant-v1"
},
{
    "left": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)CO1CCOC(=O)c2ccccc12",
    "type": "add",
    "model": "claude-instant-v1"
},
{
    "left": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C \nCNC(=O)c1ccc(cc1Nc2nccc(n2)c3cccnc3)C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12 \nCNC1=NC(=O)C2=C1C=CC=C3CCN(CCC3)CCOC2c4ccc(cc4)Cl1ccc2c(c(c12)NC(F)=NF)NC23CNc4c5cc(OC)cc5c4CN23",
    "type": "add",
    "model": "claude-instant-v1"
},
{
    "left": "Cc1ccc(NC(=O)c2ccc(CN3CCN(C)CC3)cc2)cc1Nc1nccc(-c2cccnc2)n1",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12 \nCc1ccc(NC(=O)c2ccc(CN3CCN(C)CC3)cc2)cc1Nc1nccc(-c2cccnc2)n1 \n\nC[Si]1(OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)]=NC12 Fc1nccc2nc(CN3CCN(C)CC3)=cc(-c2cccnc2)c1",
    "type": "sub",
    "model": "claude-instant-v1"
},
{
    "left": "O=C(C)Oc1ccccc1C(=O)O",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "O=C(C)Oc1ccccc1C(=O)OC[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "type": "add",
    "model": "claude-instant-v1"
},
{
    "left": "CC(=O)Oc1ccccc1C(=O)OC[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "CCOC(=O)CCC1c2ccccc2ccc1(CN)NC",
    "type": "sub",
    "model": "claude-instant-v1"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "result": [
        "CC(C)(O)O"
    ],
    "model": "cohere-command-xlarge",
    "type": "mutate"
},
{
    "left": "O=C(C)Oc1ccccc1C(=O)O",
    "result": [
        "O=C(C)Oc1ccccc1C(=O)Oc2ccccc2"
    ],
    "model": "cohere-command-xlarge",
    "type": "mutate"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1cccc(C=C)c1",
    "result": "",
    "type": "add",
    "model": "cohere-command-xlarge"
},
{
    "left": "",
    "right": "Cc1cccc(C=C)c1",
    "result": "",
    "type": "sub",
    "model": "cohere-command-xlarge"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "",
    "type": "add",
    "model": "cohere-command-xlarge"
},
{
    "left": "",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "\nThe result is\nCCC(NCNC(C(=O))C3=O)O",
    "type": "sub",
    "model": "cohere-command-xlarge"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "",
    "type": "add",
    "model": "cohere-command-xlarge"
},
{
    "left": "",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "c2ccccc2C(=O)Oc3ccccc3C(=O)Oc4ccccc4C(=O)Oc5ccccc5C(=O)Oc6ccccc6C(=O)Oc7ccccc7C(=O)O",
    "type": "sub",
    "model": "cohere-command-xlarge"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "",
    "type": "add",
    "model": "cohere-command-xlarge"
},
{
    "left": "",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "from H3C-N(C(F)(C(F)(C(F)(C(F)(F)C(F)(F)(C(F)O)C2F)O)F)C-N(C2=C3C=C3O)O)(O)CH2CH2 from",
    "type": "sub",
    "model": "cohere-command-xlarge"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "",
    "type": "add",
    "model": "cohere-command-xlarge"
},
{
    "left": "",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "",
    "type": "sub",
    "model": "cohere-command-xlarge"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "",
    "type": "add",
    "model": "cohere-command-xlarge"
},
{
    'left': 'CC(C)(C)c1ccc(O)c(c1)C(C)(C)C',
    'result': ['C(C)(C)c1ccc(O)c(c1)C(C)(C)C',
        'OCC(C)(C)C1CCCC(c2ccc(O)cc2)1',
        'c1cc(OC[C@H](C)C)ccc1CC(C)(C)C',
        'C(C)CC(Cc1ccc(OC)c(c1)C(C)(C)C)OC(C)(C)C'],
    'model': 'claude-v1.3',
    'type': 'mutate'
},
{
    'left': 'Cc1cccc(C=C)c1',
    'result': ['N1CCC2=CC=CC=C12',
        'Cc1cccc(C(=C)c2nccc(C)c2)c1',
        'CCC=C1CCc2c(cccc2)C(C[CH2+]1CC)C',
        'Cc1ccc(cc1C=C)N1CCOCC1'],
    'model': 'claude-v1.3',
    'type': 'mutate'
},
{
    'left': 'O=C(C)Oc1ccccc1C(=O)O',
    'result': ['O=C(CC(=O)N)c1ccccc1C(=O)O',
        'Cc1ccccc1C(=O)COC(=O)CCC(C)C',
        'C=Cc1ccccc1C(=O)COC(=O)Cc2ccccc2',
        'O=C(CS)c1ccccc1C(=O)COC(=O)Cc2ccccn2'],
    'model': 'claude-v1.3',
    'type': 'mutate'
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "result": [
        "C(C)(C)c1ccc(O)c(c1)C(C)(C)C",
        "OCC(C)(C)C1CCCC(c2ccc(O)cc2)1",
        "c1cc(OC[C@H](C)C)ccc1CC(C)(C)C",
        "C(C)CC(Cc1ccc(OC)c(c1)C(C)(C)C)OC(C)(C)C"
    ],
    "model": "claude-v1.3",
    "type": "mutate"
},
{
    "left": "Cc1cccc(C=C)c1",
    "result": [
        "N1CCC2=CC=CC=C12",
        "Cc1cccc(C(=C)c2nccc(C)c2)c1",
        "CCC=C1CCc2c(cccc2)C(C[CH2+]1CC)C",
        "Cc1ccc(cc1C=C)N1CCOCC1"
    ],
    "model": "claude-v1.3",
    "type": "mutate"
},
{
    "left": "O=C(C)Oc1ccccc1C(=O)O",
    "result": [
        "O=C(CC(=O)N)c1ccccc1C(=O)O",
        "Cc1ccccc1C(=O)COC(=O)CCC(C)C",
        "C=Cc1ccccc1C(=O)COC(=O)Cc2ccccc2",
        "O=C(CS)c1ccccc1C(=O)COC(=O)Cc2ccccn2"
    ],
    "model": "claude-v1.3",
    "type": "mutate"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1cccc(C=C)c1",
    "result": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)Cc1cccc(C=C)c1",
    "type": "add",
    "model": "claude-v1.3"
},
{
    "left": "C=Cc1cccc(CC(C)(C)c2cc(C(C)(C)C)ccc2O)c1",
    "right": "Cc1cccc(C=C)c1",
    "result": "Cc1cccc(Cc2ccc(O)cc2)c1",
    "type": "sub",
    "model": "claude-v1.3"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C\nCC1=CC=C(C=C1)N2N=C(C=c2nc2ccccc2C3=CC=CC=N3)C(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "type": "add",
    "model": "claude-v1.3"
},
{
    "left": "CC(C)(C)c1ccc(O)c(C(C)(C)C)c1",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "CN1C=NC2=C1NC(=O)c3ccccc31Cc4ccc(cc4Nc5ncccc5)NC(=O)c6ccccc16",
    "type": "sub",
    "model": "claude-v1.3"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CC(C)(C)c1ccc(OC(=O)c2ccccc2C(=O)O)c(c1)C(C)(C)C",
    "type": "add",
    "model": "claude-v1.3"
},
{
    "left": "CC(C)(C)c1ccc(OC(=O)c2ccccc2C(=O)O)c(C(C)(C)C)c1",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "O=C(COC(=O)c1ccc(OC(=O)c2ccccc2C(=O)O)c(C(C)(C)C)c1)c1ccccc1C(=O)O",
    "type": "sub",
    "model": "claude-v1.3"
},
{
    "left": "CC(C)(C)c1ccc(O)c(c1)C(C)(C)C",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "CCCC(C)c1ccc(O)c(c1)CCC(C)C[Si]1(C)C=C2OCCOC2=C1C1=CC=CC2=C3OCCOC[C](C)(C)C3=C[Si]2(C)c1ccc(O)c(c1)CCC",
    "type": "add",
    "model": "claude-v1.3"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "result": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)N(Cc4ccc(C=C)c4)C(=O)c5ccc(cc5)CN6CCN(CC6)C",
    "type": "add",
    "model": "claude-v1.3"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "O=C(C)Oc1ccccc1C(=O)OCCc2cccc(C=C)cc2",
    "type": "add",
    "model": "claude-v1.3"
},
{
    "left": "Cc1cccc(C=C)c1",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "Cc1cccc(C=C)c1C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2=CC(=O)NF2",
    "type": "add",
    "model": "claude-v1.3"
},
{
    "left": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)CC(=O)Oc6ccccc6C(=O)OCC(=O)O",
    "type": "add",
    "model": "claude-v1.3"
},
{
    "left": "Cc1ccc(NC(=O)c2ccc(CN3CCN(CC(=O)Oc4ccccc4C(=O)OCC(=O)O)CC3)cc2)cc1Nc1nccc(-c2cccnc2)n1",
    "right": "O=C(C)Oc1ccccc1C(=O)O",
    "result": "CNc1cc(Cl)ccc1Br\nOc1ccc2c(CN3CCCN(c4nccc(Br)c4)CC3)cccc2c1",
    "type": "sub",
    "model": "claude-v1.3"
},
{
    "left": "Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "CCC(Cc1ccc(cc1Nc2nccc(n2)c3cccnc3)NC(=O)c4ccc(cc4)CN5CCN(CC5)C)C(=O)Nc6nccc(n6)c7cccnc7)[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "type": "add",
    "model": "claude-v1.3"
},
{
    "left": "O=C(C)Oc1ccccc1C(=O)O",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "O=C(C)Oc1ccccc1C(=O)OC[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "type": "add",
    "model": "claude-v1.3"
},
{
    "left": "CC(=O)Oc1ccccc1C(=O)OC[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "right": "C[Si]1(C)C=C2OCCOC2=C1C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "result": "C=CC=C1OCCOC1=C1OCCOC1-C1=CC=C(C2=C3OCCOC3=C[Si]2(C)C)C2N=C(F)C(F)=NC12",
    "type": "sub",
    "model": "claude-v1.3"
}
];