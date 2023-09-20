import React from 'react';
import { Column, Grid, Heading } from '@carbon/react';
import classnames from 'classnames';
import ContactPanel from '../contact/contactPanel';
import Image from 'next/image';
import cerebras from '@public/partners/cerebras.png';
import databricks from '@public/partners/databricks.png';
import dell from '@public/partners/dell.png';
import epfl from '@public/partners/epfl.png';
import esa from '@public/partners/esa.png';
import ethz from '@public/partners/ethz.png';
import ibm from '@public/partners/ibm.png';
import intel from '@public/partners/intel.png';
import langchain from '@public/partners/langchain.png';
import linux from '@public/partners/linux.png';
import meta from '@public/partners/meta.png';
import mit from '@public/partners/mit.png';
import ml_commons from '@public/partners/ml_commons.png';
import nasa from '@public/partners/nasa.png';
import preferred_networks from '@public/partners/preferred_networks.png';
import redhat from '@public/partners/redhat.png';
import seldon from '@public/partners/seldon.png';
import simons_foundation from '@public/partners/simons_foundation.png';
import soft_bank from '@public/partners/soft_bank.png';
import stanford from '@public/partners/stanford.png';
import tum from '@public/partners/tum.png';
import u_tokyo from '@public/partners/u_tokyo.png';
import uiuc from '@public/partners/uiuc.png';
import weights_biases from '@public/partners/weights_biases.png';
import { motion } from 'framer-motion';
import { ROUTE } from '@utils/useNavigation';

import styles from './partners.module.scss';

const PartnersPage: React.FC<{ previousRoute: ROUTE }> = ({
  previousRoute,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: previousRoute === ROUTE.HOME ? 1.3 : 0 },
      }}
    >
      <Grid className={styles.partners}>
        <>
          <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
            <Heading
              className={classnames(
                styles.heading,
                styles['heading--partners'],
              )}
            >
              Partners
            </Heading>
          </Column>
          <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
            <div className={styles.logos}>
              <Image className={styles.size1} src={ibm} alt="IBM" />
              <Image className={styles.size2} src={redhat} alt="RedHat" />
              <Image className={styles.size1} src={dell} alt="Dell" />
              <Image className={styles.size1} src={intel} alt="Intel" />
              <Image className={styles.size1} src={soft_bank} alt="SoftBank" />
              <Image className={styles.size1} src={meta} alt="Meta" />
              <Image
                className={styles.size2}
                src={preferred_networks}
                alt="Preferred Networks"
              />
              <Image
                className={styles.size5}
                src={databricks}
                alt="Databricks"
              />
              <Image className={styles.size4} src={cerebras} alt="Cerebras" />
              <Image
                className={styles.size1}
                src={weights_biases}
                alt="Weights & Biases"
              />
              <Image className={styles.size2} src={linux} alt="linux" />
              <Image
                className={styles.size3}
                src={ml_commons}
                alt="ML Commons"
              />
              <Image className={styles.size1} src={epfl} alt="EPFL" />
              <Image className={styles.size1} src={mit} alt="MIT" />
              <Image className={styles.size2} src={uiuc} alt="UIUC" />
              <Image className={styles.size1} src={stanford} alt="Stanford" />
              <Image
                className={styles.size3}
                src={u_tokyo}
                alt="The University of Tokyo"
              />
              <Image className={styles.size6} src={nasa} alt="NASA" />
              <Image className={styles.size1} src={ethz} alt="ETH" />
              <Image className={styles.size1} src={esa} alt="ESA" />
              <Image className={styles.size1} src={seldon} alt="Seldon" />
              <Image className={styles.size1} src={tum} alt="TUM" />
              <Image
                className={styles.size0}
                src={simons_foundation}
                alt="Simons Foundation"
              />
              <Image className={styles.size1} src={langchain} alt="LangChain" />
              <div className={styles.filler}></div>
            </div>
          </Column>
        </>

        <>
          <Column xlg={{ span: 15, offset: 1 }} lg={16} md={8} sm={4}>
            <Heading
              className={classnames(
                styles.heading,
                styles['heading--benefits'],
              )}
            >
              Benefits
            </Heading>
          </Column>
          <Column xlg={{ span: 7, offset: 1 }} lg={9} md={5} sm={4}>
            <p>
              The Alliance needs partners to succeed in its mission to create
              the world’s most trusted, safe, and advanced open-source AI
              models.
            </p>
            <h3>Partner benefits include the opportunity to:</h3>
          </Column>
          <Column
            className={styles.opportunities}
            xlg={{ span: 7, offset: 1 }}
            lg={8}
            md={4}
            sm={4}
          >
            <ul>
              <li>
                Multiply human and technology resources, and reduce duplicative
                work
              </li>
              <li>
                Counter proprietary activity from competitors seeking to
                restrict access to their models and shape regulation to
                constrain innovation from others
              </li>
              <li>
                Guide and access more capable and better validated base models,
                including those from different domains and modalities (beyond
                language, code, image generation)
              </li>
            </ul>
          </Column>
          <Column
            className={styles.opportunities}
            xlg={{ span: 7, offset: 8 }}
            lg={{ span: 8, offset: 8 }}
            md={{ span: 4, offset: 4 }}
            sm={4}
          >
            <ul>
              <li>
                Drive transparency in methods that assists in building trust
                with the public and customers
              </li>
              <li>
                Advance a simple and clear framework for open versus proprietary
                data/models and technology
              </li>
              <li>
                Ensure that healthy public narrative and reasonable regulation
                prevails, which is far better done coming from a group than
                individual companies
              </li>
            </ul>
          </Column>
        </>

        <>
          <Column xlg={{ span: 7, offset: 1 }} lg={9} md={5} sm={4}>
            <h3>
              Partners of various types can expect other industry-specific
              benefits, including:
            </h3>
          </Column>
          <Column
            className={styles.table}
            xlg={{ span: 14, offset: 1 }}
            lg={16}
            md={8}
            sm={4}
          >
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Potential Contributions</th>
                  <th>Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Infrastructure Providers</th>
                  <td>
                    Compute and storage capacity for training, tuning, serving.
                  </td>
                  <td>
                    Use case understanding; feedback to refine products;
                    marketing proof points and demonstrations.
                  </td>
                </tr>
                <tr>
                  <th>Data Providers</th>
                  <td>Curated data sets across domains and modalities.</td>
                  <td>
                    Feedback on quality and utility of data to improve curation,
                    marketing proof points and demonstrations.
                  </td>
                </tr>
                <tr>
                  <th>Model Builders</th>
                  <td>Scientific and engineering talent to build models.</td>
                  <td>
                    Skills and experience development, marketing proof points
                    and demonstrations.
                  </td>
                </tr>
                <tr>
                  <th>Tool Developers and Providers</th>
                  <td>
                    Tools for data engineering; model training, tuning, and
                    validation; application integration and operations.
                  </td>
                  <td>
                    Use case understanding, feedback to refine products,
                    marketing proof points and demonstrations.
                  </td>
                </tr>
                <tr>
                  <th>Application Owners</th>
                  <td>
                    Use case context and requirements, subject matter experts.
                  </td>
                  <td>
                    Models well-targeted to specific applications with proof
                    points, and trust in the methods used to build them.
                  </td>
                </tr>
                <tr>
                  <th>Research and Educational Institutions</th>
                  <td>
                    Research staff and methods to enable and understand next
                    generation models.
                  </td>
                  <td>
                    Resources to implement new ideas; first to access largest
                    most capable models; paper and conference leadership; new
                    course development; hiring opportunities.
                  </td>
                </tr>
              </tbody>
            </table>
          </Column>
        </>

        <ContactPanel className={styles.contactPanel} background="tilted" />
      </Grid>
    </motion.div>
  );
};

export default PartnersPage;
